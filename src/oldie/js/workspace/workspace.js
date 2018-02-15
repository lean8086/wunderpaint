'use strict';

var listen = require('dom-events'),
	page = require('page'),
	emitter = require('../core').emitter;

function Workspace() {
	var that = this;

	this._el = document.getElementById('workspace');
	this._layersEl = document.getElementById('layers');
	this._screenEl = document.getElementById('screen');

	this._bindWorkspaceMovement();
	this._bindToolsExecution();

	page('/', function () {
		that.unRenderScreen();
	});

	return this;
}

/**
 * Determine the x,y relative to zoomed size and emit the tool event
 */
Workspace.prototype._executeToolAction = function (type, ev) {
	emitter.emit(type, {
		'x': Math.floor(ev.offsetX / this.zoomedPixelSize),
		'y': Math.floor(ev.offsetY / this.zoomedPixelSize),
		'originalEv': ev,
		'isIntoWorkspace': (ev.target.id === 'layers')
	});
};

/**
 * Allow to know cursor position and tools execution moment
 */
Workspace.prototype._bindToolsExecution = function () {
	var that = this;

	this._isToolExecuting = false;

	listen.on(this._el, 'mousedown', function (ev) {
		that._isToolExecuting = true;
		if (!that._isWorkspaceMoving) { that._executeToolAction('tooldown', ev); }
	});

	listen.on(this._el, 'mousemove', function (ev) {
		if (that._isToolExecuting && !that._isWorkspaceMoving) {
			that._executeToolAction('toolmove', ev);
		}
	});

	listen.on(this._el, 'mouseup', function (ev) {
		that._isToolExecuting = false;
		if (!that._isWorkspaceMoving) { that._executeToolAction('toolup', ev); }
	});
};

/**
 * Allow to drag the "layers" wrapper
 */
Workspace.prototype._bindWorkspaceMovement = function () {
	var that = this,
		initialX = 0,
		initialY = 0;

	this._isWorkspaceMoving = false;

	listen.on(window, 'keydown', function (ev) {
		// Work only with the spacebar ONE time
		if (that._isWorkspaceMoving || ev.keyCode !== 32) { return; }
		// Avoid to scroll
		ev.preventDefault();
		// Enable movement but only when active
		that._isWorkspaceMoving = true;

		that._setCursor('grab');
	});

	listen.on(window, 'keyup', function (ev) {
		// Work only when there was a movement, and it event is from spacebar
		if (!that._isWorkspaceMoving || ev.keyCode !== 32) { return; }
		// Force the movement disable
		that._isWorkspaceMoving = false;
		// Reset cursor to default
		that._setCursor();
	});

	listen.on(this._el, 'mousedown', function (ev) {
		// Work only with spacebar pressed
		if (!that._isWorkspaceMoving) { return; }
		// Grab the current x,y relative to the workspace wrapper element
		initialX = ev.pageX - that.offsetX;
		initialY = ev.pageY - that.offsetY;

		that._setCursor('grabbing');
	});

	listen.on(this._el, 'mouseup', function (ev) {
		// Work only with spacebar pressed
		if (that._isWorkspaceMoving) {
			that._setCursor('grab');
			initialX = initialY = 0;
		}
	});

	listen.on(this._el, 'mousemove', function (ev) {
		// Update the CSS translate values only with spacebar and mouse pressed
		if (that._isToolExecuting && that._isWorkspaceMoving) {
			that.setPosition(ev.pageX - initialX, ev.pageY - initialY);
		}
	});
};

Workspace.prototype._setCursor = function (type) {
	this._el.dataset.cursor = type || '';
};

Workspace.prototype.setPosition = function (tx, ty) {
	if (this.offsetX === tx && this.offsetY === ty) { return; }

	var style = this._layersEl.style;

	this.offsetX = tx;
	this.offsetY = ty;

	style.left = tx + 'px';
	style.top = ty + 'px';
	// TODO: style.webkitTransform = style.transform = 'translate(' + this.offsetX + 'px,' + this.offsetY + 'px)';

	emitter.emit('workspacePositionUpdate', this);

	return this;
};

Workspace.prototype.centerPosition = function () {
	var rect = this._el.getBoundingClientRect(),
		tx = Math.floor((rect.width - this.zoomedWidth) / 2),
		ty = Math.floor((rect.height - this.zoomedHeight) / 2);

	this.setPosition(tx, ty);

	return this;
};

Workspace.prototype._updateZoomedSize = function () {
	this.zoomScale = this.zoomScale || 1;
	this.zoomedWidth = (this.width * this.zoomScale);
	this.zoomedHeight = (this.height * this.zoomScale);
	this.zoomedPixelSize = (this.zoomedWidth / this.width);

	this._layersEl.style.width = this.zoomedWidth + 'px';
	this._layersEl.style.height = this.zoomedHeight + 'px';
};

Workspace.prototype.setSize = function (w, h) {
	this.width = w || this.width;
	this.height = h || this.height;

	this._updateZoomedSize();

	emitter.emit('workspaceSizeUpdate', this);

	return this;
};

Workspace.prototype.setZoom = function (scale) {
	this.zoomScale = scale || 1;

	this._updateZoomedSize();
	this.centerPosition();

	emitter.emit('workspaceZoomUpdate', this);

	return this;
};

Workspace.prototype.renderScreen = function (name, template, callback) {
	this._layersEl.hidden = true;

	this._screenEl.className = name;
	this._screenEl.insertAdjacentHTML('beforeend', template);
	this._screenEl.hidden = false;

	emitter.emit('screenLoad');
};

Workspace.prototype.unRenderScreen = function () {
	this._layersEl.hidden = false;

	this._screenEl.hidden = true;
	this._screenEl.className = null;
	this._screenEl.innerHTML = '';

	emitter.emit('screenUnload');
};


module.exports = new Workspace();


setTimeout(function(){ page('/new'); }, 0);

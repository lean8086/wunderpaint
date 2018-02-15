'use strict';

/*
	@todo
	marquee "Marquee (M)"
	wand "Magic Wand (W)"
	move "Move (V)"
	line "Line (L)"
	bucket "Paint bucket (G)"
	ellipse "Ellipse (C)"
	rectangle "Rectangle (R)"
	zoom "Zoom (Z)"
*/

var listen = require('dom-events'),
	emitter = require('../core').emitter,
	template = require('../../templates/header.handlebars');

function Toolbox() {
	document.getElementById('header').innerHTML = template();

	this._el = document.getElementById('toolbox');
	this._selectedTool;
	this._tools = {};
	this._enabled = false;

	this._bindToolsSelection();
	this._bindToolsExecution();
	this._bindToolsStatus();
}

Toolbox.prototype._bindToolsSelection = function () {
	var that = this;

	// Select a tool via mouse/touch/pointer
	listen.on(this._el, 'change', function (ev) {
		that.selectTool(that.getToolById(ev.target.value));
	});

	// Select a tool via keyCode
	listen.on(window, 'keydown', function (ev) {
		// Work only if there is no chance this tool is already selected
		if (ev.keyCode === that.getSelectedTool().shortcutKeyCode) { return; }
		// Work only if it's just one key (not a combination)
		if (ev.metaKey || ev.ctrlKey || ev.altKey || ev.shiftKey) { return; }
		// Work only if a tool with this keyCode exist
		if (!that.getToolById(ev.keyCode)) { return; }

		that.selectTool(that.getToolById(ev.keyCode));
	});
};

Toolbox.prototype._bindToolsExecution = function () {
	var that = this;

	['tooldown', 'toolmove', 'toolup'].forEach(function (type) {
		emitter.on(type, function (data) {
			if (that._enabled) {
				var action = that.getSelectedTool()[type];
				if (typeof action === 'function') { action(data); }
			}
		});
	});
};

Toolbox.prototype._bindToolsStatus = function () {
	var that = this;

	emitter.on('screenLoad', function () {
		that._enabled = false;
	});

	emitter.on('screenUnload', function () {
		that._enabled = true;
	});
};

Toolbox.prototype.selectTool = function (tool) {
	// Save the entire reference of tool to be selected
	this._selectedTool = tool;
	// Update checkbox "checked" property
	tool.check();

	emitter.emit('toolselect', this);
};

Toolbox.prototype.getSelectedTool = function () {
	return this._selectedTool;
};

Toolbox.prototype.saveTool = function (toolInstance) {
	this._tools[toolInstance.shortcutKeyCode] = toolInstance;
};

Toolbox.prototype.getToolById = function (id) {
	return this._tools[id];
};

Toolbox.prototype.insertHTML = function (html) {
	this._el.insertAdjacentHTML('beforeend', html);
};

Toolbox.prototype.getToolElement = function (id) {
	return this._el.querySelector('[value="' + id + '"]');
};


module.exports = new Toolbox();

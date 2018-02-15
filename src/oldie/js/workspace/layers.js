// TODO: ver como manejar tantos exports
'use strict';

var Color = require('color'),
	EasyCanvas = require('../local_modules/easy-canvas'),
	emitter = require('../core').emitter,
	workspace = require('./workspace'),
	// logger = require('../changelogger'),

	container = document.getElementById('layers'),
	layers = {},
	selectedLayer;


exports.offCanvas = new EasyCanvas()
	.attr('class', 'off-canvas layer')
	.setSize(workspace.zoomedWidth, workspace.zoomedHeight)
	.appendTo(container);

emitter.on('workspaceSizeUpdate', function (workspace) {
	exports.offCanvas.setSize(workspace.zoomedWidth, workspace.zoomedHeight);
});

emitter.on('workspaceZoomUpdate', function (workspace) {
	// var imageData = that.el.getImageData();
	exports.offCanvas
		.setSize(workspace.zoomedWidth, workspace.zoomedHeight)
		.ctx.scale(workspace.zoomScale, workspace.zoomScale);
	// that.el.ctx.putImageData(imageData, 0, 0);
	// emitter.emit('layerZoomUpdate', that);
});



exports.getLayersSize = function () {
	return Object.keys(layers).length;
};

exports.getLayerById = function (id) {
	return layers[id];
};

exports.getSelectedLayer = function () {
	return selectedLayer;
};

exports.setSelectedLayer = function (id) {
	selectedLayer = layers[id];
	emitter.emit('layerselect', selectedLayer);
};

exports.removeSelectedLayer = function () {
	// Don't allow to delete the last layer. It have to be at least one.
	if (this.getLayersSize() > 1) {
		selectedLayer.removeElement();
		var id = selectedLayer.id;
		layers[id] = selectedLayer = null;
		delete layers[id];
	}
};

// TODO: se puede hacer dibujando en el canvas? en lugar de css
exports.changeLayerOpacity = function (id, value) {
	layers[id].el.canvas.style.opacity = value;
};

function Layer() {
	var that = this,
		// Convert layers ID to number or set an initial value
		layersId = Object.keys(layers).length ? Object.keys(layers).map(Number) : [0];
	// Determine the Layer index by adding 1 to the max existent id
	this.id = Math.max.apply(null, layersId) + 1,
	// TODO: ver como exportar solo esto. aca esta de mas el this.id
	this.el = new EasyCanvas()
		.attr('class', 'layer')
		.setSize(workspace.zoomedWidth, workspace.zoomedHeight)
		.attr('data-id', this.id)
		.appendTo(container);

	// TODO: meter estos 2 en 2 funciones para usarlos en eventos
	// TODO: usar selectedcolor
	this.el.setFillStyle('rgb(0,0,0)');
	this.el.ctx.scale(workspace.zoomScale, workspace.zoomScale);

	layers[this.id] = this;

	exports.setSelectedLayer(this.id);

	// logger.snapshot('newlayer');

	emitter.on('colorselect', function (color) {
		that.el.setFillStyle(color.rgbString());
	});

	emitter.on('workspaceSizeUpdate', function (workspace) {
		var imageData = that.el.getImageData();
		that.el.setSize(workspace.zoomedWidth, workspace.zoomedHeight);
		that.el.zoom(workspace.zoomScale);
		if (imageData) that.el.ctx.putImageData(imageData, 0, 0);
	// 	emitter.emit('layerSizeUpdate', that);
	});

	emitter.on('workspaceZoomUpdate', function (workspace) {
		// var imageData = that.el.getImageData();
		that.el
			.setSize(workspace.zoomedWidth, workspace.zoomedHeight)
			.ctx.scale(workspace.zoomScale, workspace.zoomScale);
		// that.el.ctx.putImageData(imageData, 0, 0);
		emitter.emit('layerZoomUpdate', that);
	});
};

Layer.prototype.getPixelColor = function (x, y) {
	var pixelData = this.el.getImageData(x, y, 1, 1).data;
	return Color().rgb(Array.prototype.slice.call(pixelData));
};

Layer.prototype.drawPixel = function (x, y) {
	this.el.ctx.fillRect(x, y, 1, 1);
};

Layer.prototype.erasePixel = function (x, y) {
	this.el.ctx.clearRect(x, y, 1, 1);
};

Layer.prototype.removeElement = function () {
	this.el.canvas.parentNode.removeChild(this.el.canvas);
};

exports.Layer = Layer;

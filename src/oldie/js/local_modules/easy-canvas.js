'use strict';

function EasyCanvas(width, height) {
	this.canvas = document.createElement('canvas');
	this.ctx = this.canvas.getContext('2d');

	if (!!width) {
		if (!!height) {
			this.setSize(width, height);
		} else {
			this.setSize(width, width);
		}
	}

	return this;
}

EasyCanvas.prototype.attr = function (type, value) {
	// Setter
	if (value) {
		this.canvas.setAttribute(type, value);
		return this;
	}
	// Getter
	return this.canvas.getAttribute(type);
};

EasyCanvas.prototype.appendTo = function (parent) {
	parent.appendChild(this.canvas);
	return this;
};

EasyCanvas.prototype.prependTo = function (parent) {
	parent.insertBefore(this.canvas, parent.firstChild);
	return this;
};

EasyCanvas.prototype.remove = function () {
	this.canvas.parentNode.removeChild(this.canvas);
	return this;
};

EasyCanvas.prototype.setSize = function (w, h) {
	this.canvas.width = w;
	this.canvas.height = h;
	return this;
};

EasyCanvas.prototype.setFillStyle = function (style) {
	this.ctx.fillStyle = style;
	return this;
};

EasyCanvas.prototype.setStrokeStyle = function (style) {
	this.ctx.strokeStyle = style;
	return this;
};

EasyCanvas.prototype.zoom = function (scale) {
	this.ctx.scale(scale, scale);
	this.ctx.drawImage(this.canvas, 0, 0);
	return this;
};

EasyCanvas.prototype.clear = function () {
	if (arguments.length) {
		return this.ctx.clearRect.call(null, Array.prototype.slice.call(arguments))
	} else {
		this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
	}
};

EasyCanvas.prototype.setImageSmoothing = function (state) {
	this.ctx.webkitImageSmoothingEnabled = state;
	this.ctx.mozImageSmoothingEnabled = state;
	this.ctx.msImageSmoothingEnabled = state;
	this.ctx.oImageSmoothingEnabled = state;
	this.ctx.imageSmoothingEnabled = state;
	return this;
};

EasyCanvas.prototype.enableImageSmoothing = function () {
	return this.setImageSmoothing(true);
};

EasyCanvas.prototype.disableImageSmoothing = function () {
	return this.setImageSmoothing(false);
};

EasyCanvas.prototype.getImageData = function () {
	if (!this.canvas.width || !this.canvas.height) return;
	if (arguments.length) {
		return this.ctx.getImageData.apply(this.ctx, Array.prototype.slice.call(arguments))
	} else {
		return this.ctx.getImageData(0, 0, this.canvas.width, this.canvas.height);
	}
};

EasyCanvas.prototype.clone = function () {
	return new EasyCanvas(this.canvas.width, this.canvas.height).ctx.drawImage(this.canvas, 0, 0);
};

module.exports = EasyCanvas;

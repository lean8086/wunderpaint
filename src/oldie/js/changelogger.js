'use strict';

var listen = require('dom-events'),
	undoRedo = new (require('./local_modules/undo-redo'))();
	// layers = require('./workspace/layers');

function Changelogger() {

	var that = this;

	listen.on(window, 'keydown', function (ev) {
		var ctrl = (ev.metaKey && !ev.ctrlKey) || (ev.ctrlKey && !ev.metaKey) && !ev.altKey && !ev.shiftKey;

		// Ctrl/⌘ + Z
		if (ev.keyCode === 90 && ctrl) {
			event.preventDefault();
			that.undo();
		// Ctrl/⌘ + Y
		} else if (ev.keyCode === 89 && ctrl) {
			event.preventDefault();
			that.redo();
		}
	});
}

Changelogger.prototype.undo = function () {
	var data = undoRedo.undo();
	if (!!data) {
		data.layer.ctx.putImageData(data.imageData, 0, 0);
	}
};

Changelogger.prototype.redo = function () {
	var data = undoRedo.redo();
	if (!!data) {
		data.layer.ctx.putImageData(data.imageData, 0, 0);
	}
};

Changelogger.prototype.snapshot = function (layer) {
	// TODO: guardar solo el cambio relativo (creo que se llama dirtyX y dirtyY)
	undoRedo.register({
		'layer': layer,
		'imageData': layer.getImageData()
	});
};


module.exports = new Changelogger();

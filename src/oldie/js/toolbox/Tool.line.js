'use strict';

var changesHistory = require('../changelogger'),
	Tool = require('./Tool'),
	workspace = require('../workspace/workspace'),
	layers = require('../workspace/layers');
	//undo = require('../workspace/undo'),
	// UndoRedo = require('undo-redoer');
	// undoRedoer = new UndoRedoer();
// console.log(UndoRedoer);
var color;
require('../core').emitter.on('colorselect', function (c) { color = c; });

function write(data) {
	// The Pencil must work only inside any canvas
	if (data.originalEv.target.nodeName !== 'CANVAS') { return; }

	data.offCanvas.ctx.fillStyle = data.offCanvas.ctx.strokeStyle = color.style;
	data.offCanvas.ctx.fillRect(data.x, data.y, workspace.zoomedPixelSize, workspace.zoomedPixelSize);
}

function save(data) {
	changesHistory.register({
		'layer': data.layer,
		'imageData': layers.selectedLayer.el.getImageData()
	});
	layers.selectedLayer.el.ctx.drawImage(data.offCanvas.canvas, 0, 0);
	data.offCanvas.clear();
}

new Tool({
	'name': 'line',
	'title': 'Pencil (B)',
	'shortcutTitle': 'L',
	'shortcutKeyCode': 66,
	'tooldown': write,
	'toolmove': write,
	'toolup': save,
	'selected': true
});

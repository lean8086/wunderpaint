'use strict';

var Tool = require('./Tool'),
	layers = require('../workspace/layers'),
	logger = require('../changelogger');

function draw(data) {
	if (data.isIntoWorkspace) {
		// TODO: 1,1 es porque es de 1 px. hacer configurable en la pill
		layers.getSelectedLayer().el.ctx.fillRect(data.x, data.y, 1, 1);
	}
}

new Tool({
	'name': 'pencil',
	'title': 'Pencil (B)',
	'shortcutTitle': 'B',
	'shortcutKeyCode': 66,
	'tooldown': draw,
	'toolmove': draw,
	'toolup': function () {
		logger.snapshot(layers.getSelectedLayer().el);
	},
	'selected': true
});

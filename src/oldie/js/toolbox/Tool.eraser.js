'use strict';

var Tool = require('./Tool'),
	layers = require('../workspace/layers'),
	logger = require('../changelogger');

function erase(data) {
	if (data.isIntoWorkspace) {
		layers.getSelectedLayer().erasePixel(data.x, data.y);
	}
}

new Tool({
	'name': 'eraser',
	'title': 'Eraser (E)',
	'shortcutTitle': 'E',
	'shortcutKeyCode': 69,
	'tooldown': erase,
	'toolmove': erase,
	'toolup': logger.snapshot
});

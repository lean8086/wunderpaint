'use strict';

var Color = require('color'),
	Tool = require('./Tool'),
	layers = require('../workspace/layers'),
	logger = require('../changelogger');

function lighten(data) {
	if (!data.isIntoWorkspace) { return; }

	var layer = layers.getSelectedLayer(),
		original = layer.getPixelColor(data.x, data.y),
		// TODO: hacer multi herramienta (lighten/darken, saturate/desaturate, whiten/blaken, clearer/opaquer, greyscale)
		// TODO: configurable el valor de cuanto lightenea
		modified = original.lighten(0.5);

console.log(original.rgbString(), modified.rgbString());

	layer.el.setFillStyle(modified.rgbString());
	// layer.drawPixel(data.x, data.y);
}

new Tool({
	'name': 'lighten',
	'title': 'Lighten (U)',
	'shortcutTitle': 'U',
	'shortcutKeyCode': 85,
	'tooldown': lighten,
	'toolmove': lighten,
	'toolup': logger.snapshot
});

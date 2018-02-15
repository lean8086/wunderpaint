'use strict';

var emitter = require('../core').emitter,
	//TODO: ver como dejar de depender de esto
	workspace = require('./workspace');

/**
 * DOM creation
 */
var el = document.createElement('div');
el.id = 'grid';
document.getElementById('layers').appendChild(el);

/**
 * Event bindings
 */
function changeSize() {
	// TODO: Si es menor a 3,4,5 pixels (nose), hacer desaparecer
	el.style.backgroundSize = workspace.zoomedPixelSize + 'px ' + workspace.zoomedPixelSize + 'px';
}

emitter.on('workspaceSizeUpdate', changeSize);
emitter.on('workspaceZoomUpdate', changeSize);

/**
 * Public members
 */
exports.show = function () {
	el.hidden = false;
};

exports.hide = function () {
	el.hidden = true;
};

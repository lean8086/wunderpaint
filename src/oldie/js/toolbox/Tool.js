'use strict';

var toolbox = require('./toolbox'),
	renderToolTemplate = require('../../templates/tool.handlebars');

/**
 * @param {Object} data
 * @param {String} data.name
 * @param {String} data.title
 * @param {Number} data.shortcutKeyCode
 * @param {Boolean} [data.selected]
 * @param {Function} [data.tooldown]
 * @param {Function} [data.toolmove]
 * @param {Function} [data.toolup]
 * @see http://codetheory.in/different-tools-for-our-sketching-application/
 */
function Tool(config) {

	var that = this;

	// Save every "config" property into "this"
	Object.keys(config).forEach(function (prop) {
		that[prop] = config[prop];
	});

	// Append template to "Toolbox"
	toolbox.insertHTML(renderToolTemplate(config));

	// Find the INPUT element
	this._el = toolbox.getToolElement(this.shortcutKeyCode);

	// Save tool in global tools reference
	toolbox.saveTool(this);

	if (this.selected) {
		toolbox.selectTool(this);
	}
};

Tool.prototype.check = function () {
	this._el.checked = true;
};


module.exports = Tool;

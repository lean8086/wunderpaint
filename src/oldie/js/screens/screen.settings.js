'use strict';

var page = require('page'),
	listen = require('dom-events'),
	renderWorkspaceSettingsTemplate = require('../../templates/screen.workspace-settings.handlebars'),
	workspace = require('../workspace/workspace'),
	layers = require('../panels/panels.layers');

page('/canvas-settings', function () {
	workspace.renderScreen('canvas-screen', renderWorkspaceSettingsTemplate({
		'submit-text': 'Accept',
		'width': workspace.width,
		'height': workspace.height
	}));

	listen.on(document.getElementById('workspace-size-submit'), 'click', function () {
		var w = +document.getElementById('workspace-width').value,
			h = +document.getElementById('workspace-height').value;

		workspace.setSize(w, h);

		page('/');
	});
});

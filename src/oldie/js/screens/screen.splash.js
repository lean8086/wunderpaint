'use strict';

var page = require('page'),
	listen = require('dom-events'),
	renderTemplate = require('../../templates/screen.splash.handlebars'),
	renderWorkspaceSettingsTemplate = require('../../templates/screen.workspace-settings.handlebars'),
	workspace = require('../workspace/workspace'),
	layers = require('../panels/panels.layers');

page('/new', function () {
	workspace.renderScreen('splash', renderTemplate({
		'workspaceSettingsTemplate': renderWorkspaceSettingsTemplate({
			'submit-text': 'Create',
			'width': 32,
			'height': 12
		})
	}));

	listen.on(document.getElementById('workspace-size-submit'), 'click', function () {
		var w = +document.getElementById('workspace-width').value,
			h = +document.getElementById('workspace-height').value;

		layers.addLayer();

		// TODO: setear el zoom inicial basado en el boundingclientrect del workspace disponible
		workspace.setSize(w, h).setZoom(24);

		page('/');
	});
});

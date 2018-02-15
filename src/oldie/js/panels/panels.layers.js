'use strict';

var listen = require('dom-events'),
	layers = require('../workspace/layers'),
	panels = require('./panels'),
	// logger = require('../changelogger'),

/**
 * Templates
 */
	renderPanelTemplate = require('../../templates/layers.panel.handlebars'),
	renderItemTemplate = require('../../templates/layers.panel.item.handlebars');

/**
 * Create base DOM
 */

panels.insertHTML(renderPanelTemplate());

var panelEl = panels.getPanelElement('layers-panel'),
	contentEl = panelEl.querySelector('.panel-content');

/**
 * Administrate CONTENT items
 */

function addLayer() {
	var l = new layers.Layer();
	// TODO: loggear la tarea de que se creó este layer
	// logger.snapshot();
	// TODO: insertar al lado del que este seleccionado
	// TODO: crear un tipo de "order" para mover capas
	contentEl.insertAdjacentHTML('afterbegin', renderItemTemplate({'id': l.id}));
}

function removeLayer() {
	// Work only if there is layers to delete
	if (layers.getLayersSize() <= 1) { return; }

	// Get the DOM element for the item of the selectedLayer instance
	var item = contentEl.querySelector('[data-id="' + layers.getSelectedLayer().id + '"]'),
		// Check for next or previous layer to be selected
		itemToBeSelected = item.nextElementSibling || item.previousElementSibling,
		inputToBeSelected = itemToBeSelected.querySelector('input');

	item.remove();

	layers.removeSelectedLayer();
	layers.setSelectedLayer(inputToBeSelected.value);

	// Select previous or next input
	inputToBeSelected.checked = true;
}

/**
 * Bind tasks
 */

listen.on(panelEl.querySelector('.add'), 'click', addLayer);
listen.on(panelEl.querySelector('.remove'), 'click', removeLayer);

// Administrate tasks inside CONTENT
listen.on(contentEl, 'change', function (ev) {
	var t = ev.target,
		value = parseInt(t.value, 10);

	switch (t.type) {
		// Select a layer via mouse/touch/pointer.
		case 'radio':
			layers.setSelectedLayer(value);
		break;
		// Toggle visibility
		case 'checkbox':
			// Use Opacity range to show exactly how it was before hide
			// changeLayerOpacity(value, (t.checked) ? parseInt(t.nextElementSibling.value, 10) / 100 : 0);
			layers.getLayerById(value).el.canvas.hidden = !t.checked;
		break;
		// // Change opacity
		// case 'range':
		// 	changeLayerOpacity(t.dataset.id, value / 100);
		// 	// Update Visibility checkbox if it's hidden or not
		// 	t.previousElementSibling.checked = !!value;
		// break;
	}
});

/**
 * Initialize with one created layer
 */
// TODO: si estan abriendo un file, crear las que esten en la metadata del archivo guardado
// addLayer();
exports.addLayer = addLayer;

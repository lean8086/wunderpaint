'use strict';

var Color = require('color'),
	emitter = require('../core').emitter,

/**
 * Templates
 */
	renderPanelTemplate = require('../../templates/pallette.panel.handlebars'),
	renderColorTemplate = require('../../templates/pallette.color.handlebars'),

/**
 * Privates
 */
	colors = {},
	selectedColor,
	// TODO: primero chequear localhost
	defaultColors = [
		[0, 0, 0],       // Black
		[44, 62, 80],    // Midnight blue
		[52, 73, 94],    // Wet asphalt
		[127, 140, 141], // Asbestos
		[149, 165, 166], // Concrete
		[189, 195, 199], // Silver
		[236, 240, 241], // Clouds
		[255, 255, 255], // White
		[39, 174, 96],   // Nephritis
		[46, 204, 113],  // Emerald
		[22, 160, 133],  // Green Sea
		[26, 188, 156],  // Turquoise
		[41, 128, 185],  // Belize hole
		[52, 152, 219],  // Peter river
		[142, 68, 173],  // Wisteria
		[155, 89, 182],  // Amethyst
		[192, 57, 43],   // Pomegranate
		[231, 76, 60],   // Alizarin
		[211, 84, 0],    // Pumpkin
		[230, 126, 34],  // Carrot
		[243, 156, 18],  // Orange
		[241, 196, 15],  // Sun flower
		[255, 255, 0]    // Yellow
	];

function createColor(ref, selected) {
	var c = Color().rgb(ref),
		id = c.hexString().replace('#', 'c');

	panelEl.insertAdjacentHTML('beforeend', renderColorTemplate({
		'id': id,
		'style': c.rgbString(),
		'selected': selected
	}));

	colors[id] = c;
}

function selectColor(id) {
	selectedColor = colors[id];
	emitter.emit('colorselect', selectedColor);
}

function addColor() {
	//
	var reference;
	// @todo Show a screen + color picker
	do {
		reference = window.prompt('Enter Red, Green, Blue, Alpha', '255, 0, 0, 1').split(',').map(Number);
	} while(colors['c' + reference.join('').replace(/\,/gi,'')] !== undefined);
	//
	createColor(reference, true);
}

function removeColor() {
	// Work only if there is colors to delete
	if (!Object.keys(colors).length) { return; }

	// Get the DOM element of the selectedColor instance
	var input = panelEl.querySelector('#' + selectedColor.id),
		label = input.nextElementSibling,
		prev = input.previousElementSibling,
		// Check for previous or next color to be selected, in case the user was deleting the first color
		nextSelected = (prev.nodeName === 'LABEL') ? prev.previousElementSibling : label.nextElementSibling;

	// Remove Color DOM
	input.remove();
	label.remove();

	// Remove Color instance
	colors[selectedColor.id] = null;
	delete colors[selectedColor.id];

	// Select previous or next input
	if (nextSelected) {
		nextSelected.checked = true;
		selectColor(nextSelected.value);
	}
}

/**
 * @param {Array} data [r, g, b, alpha]
 * @param {Boolean} [selected]
 */
// function Color2(data, selected) {
// 	//
// 	this.r = data[0];
// 	this.g = data[1];
// 	this.b = data[2];
// 	this.alpha = data[3];
// 	this.reference = data.toString();
// 	this.style = 'rgba(' + this.reference + ')';
// 	this.id = 'c' + this.reference.replace(/\,/gi,'');
//
// 	// Append template to "Panels"
// 	panelEl.insertAdjacentHTML('beforeend', colorTemplate({
// 		'id': this.id,
// 		'style': this.style,
// 		'selected': selected
// 	}));
//
// 	// Save colors in global reference
// 	colors[this.id] = this;
//
// 	if (selected) {
// 		selectColor(this.id);
// 	}
// }

/**
 * Panel
 */

// Append Panel
document.getElementById('panels').insertAdjacentHTML('beforeend', renderPanelTemplate());
var panelEl = document.getElementById('pallette-panel');

// Select a color via mouse/touch/pointer.
panelEl.addEventListener('change', function (ev) {
	selectColor(ev.target.value);
});

// Add color
panelEl.querySelector('.add').addEventListener('click', addColor);

// Remove color
panelEl.querySelector('.remove').addEventListener('click', removeColor);

// Create initial Colors
defaultColors.forEach(function (colorReference, i) {
	createColor(colorReference, (i === 0));
});

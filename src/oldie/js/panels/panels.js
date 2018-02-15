'use strict';

function Panels() {
	this._el = document.getElementById('panels');
}

Panels.prototype.insertHTML = function (html) {
	this._el.insertAdjacentHTML('beforeend', html);
};

Panels.prototype.getPanelElement = function (id) {
	return this._el.querySelector('#' + id);
};


module.exports = new Panels();

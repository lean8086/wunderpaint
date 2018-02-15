'use strict';

function UndoRedo(config) {
	this._history = [];
	this._pointer = 0;
	this.maxUndos = (!!config && !!config.maxUndos) ? config.maxUndos : 100;
}

UndoRedo.prototype.register = function (data) {
	var history = this._history;
	// Every time a change is logged, the history queue has to be sliced
	// to avoid redo old changes. This way it will be able to log new changes.
	// For fastest results, slice the array by overwriting its length
	// instead of execute the slice() method.
	if (this._pointer !== history.length) {
		history.length = this._pointer;
	}

	history.push(data);
	// Here, the pointer is equal to the old queue length, so it have to
	// increase in one due to this new log.
	this._pointer += 1;
	// Keep the queue as long as maxUndos was defined. Delete the first
	// position. This log will be totally lost.
	if (history.length > this.maxUndos) {
		history.shift();
	}

	return this;
};

UndoRedo.prototype.undo = function () {
	// Allow to undo only when there is changes in the queue, and "pointer"
	// isn't in the first position.
	if (!!this._history.length && this._pointer > 1) {
		this._pointer -= 1;
		// Temporally transform "pointer" to a zero-based number
		return this._history[this._pointer - 1];
	}
};

UndoRedo.prototype.redo = function () {
	// Allow to redo only when "pointer" isn't in the last position.
	if (this._pointer < this._history.length) {
		this._pointer += 1;
		// Temporally transform "pointer" to a zero-based number
		return this._history[this._pointer - 1];
	}
};

module.exports = UndoRedo;

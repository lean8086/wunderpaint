const max = 10;
let history = [];
let pointer = -1;

function add(state) {
  history.length = pointer + 1;
  history.push(state);
  if (history.length > max) history.shift();
  pointer = history.length - 1;
}

function undo() {
  if (!isUndoPossible()) return;
  return history[pointer -= 1];
}

function redo() {
  if (!isRedoPossible()) return;
  return history[pointer += 1];
}

function isUndoPossible() {
  return history.length > 1 && pointer > 0;
}

function isRedoPossible() {
  return history.length - pointer > 1;
}

export default { add, undo, redo, isUndoPossible, isRedoPossible };
export default ({ onMouseDown, selected }) => (
  <button
    onMouseDown={onMouseDown}
    style={selected ? { background: 'cyan' } : null}
  >Grid</button>
);

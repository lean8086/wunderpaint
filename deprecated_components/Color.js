export default ({ name, onMouseDown, selected }) => (
  <button
    onMouseDown={onMouseDown}
    style={selected ? { background: 'cyan' } : null}
  >
    {name}

    <style jsx>{`
      button {
        cursor: pointer;
      }
    `}</style>
  </button>
);

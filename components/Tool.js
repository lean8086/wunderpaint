export default ({ name, onMouseDown, selected }) => (
  <button
    onMouseDown={onMouseDown}
    style={selected ? { background: 'cyan' } : null}
  >
    {`${name.charAt(0).toUpperCase()}${name.slice(1)}`}

    <style jsx>{`
      button {
        cursor: pointer;
      }
    `}</style>
  </button>
);

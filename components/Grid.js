export default ({ hidden, gridSize, width, height }) => (
  <div
    className='Grid Layer'
    hidden={hidden}
    style={{
      backgroundSize: `${gridSize}px ${gridSize}px`,
      width: `${width}px`,
      height: `${height}px`,
    }}
  />
);

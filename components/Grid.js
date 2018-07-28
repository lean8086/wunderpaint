export default ({ hidden, gridSize, width, height }) => (
  <div
    hidden={hidden}
    style={{
      backgroundSize: `${gridSize}px ${gridSize}px`,
      width: `${width}px`,
      height: `${height}px`,
    }}
  >
    <style jsx>{`
      div {
        background-image:
          linear-gradient(#eee 1px, transparent 1px),
          linear-gradient(90deg, #eee 1px, transparent 1px);
      	pointer-events: none;
      	z-index: 98;
      	cursor: inherit;
        box-shadow: 1px 0 0 #eee, 0 1px 0 #eee, 1px 1px 0 #eee;
        position: absolute;
        left: 0;
        top: 0;
      }
    `}</style>
  </div>
);

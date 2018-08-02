import Layer from '../containers/Layer';

export default (props) => (
  <section
    onClick={props.onClick}
    onMouseDown={props.onMouseDown}
    onMouseUp={props.onMouseUp}
    onMouseMove={props.onMouseMove}
    style={{
      width: props.width,
      height: props.height,
    }}
  >
    <Layer order={0}/>
    <Layer shadow/>
    {props.grid &&
      <div
        style={{ backgroundSize: `${props.gridSize}px ${props.gridSize}px` }}
        className="grid"
      />
    }

    <style jsx>{`
      section,
      .grid {
        position: absolute;
        top: 0;
        left: 0;
        cursor: crosshair;
      }

      section {
        box-shadow: 1px 0 0 #eee, 0 1px 0 #eee, 1px 1px 0 #eee, inset 1px 1px 0 #eee;
      }

      .grid {
        background-image:
          linear-gradient(#eee 1px, transparent 1px),
          linear-gradient(90deg, #eee 1px, transparent 1px);
        bottom: 0;
        right: 0;
      }
    `}</style>
  </section>
);

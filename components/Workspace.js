import Layer from '../containers/Layer';

export default (props) => (
  <div
    className="workspace"
    onClick={props.onClick}
    onMouseDown={props.onMouseDown}
    onMouseUp={props.onMouseUp}
    onMouseMove={props.onMouseMove}
  >
    <div
      className="workspace__container"
      style={{
        width: props.width,
        height: props.height,
      }}
    >
      <Layer order={0}/>
      <Layer shadow/>
      {props.grid &&
        <div
          className="workspace__grid"
          style={{ backgroundSize: `${props.gridSize}px ${props.gridSize}px` }}
        />
      }
    </div>

    <style jsx>{`
      .workspace {
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: auto;
        padding: 50px;
        background: #fff;
      }

      .workspace__container {
        box-shadow: 1px 0 0 #eee, 0 1px 0 #eee, 1px 1px 0 #eee, inset 1px 1px 0 #eee;
        cursor: crosshair;
        position: relative;
      }

      .workspace__grid {
        position: absolute;
        background-image:
          linear-gradient(#eee 1px, transparent 1px),
          linear-gradient(90deg, #eee 1px, transparent 1px);
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
      }
    `}</style>
  </div>
);

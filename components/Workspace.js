import Layer from '../containers/Layer';
import Grid from '../containers/Grid';

export default (props) => (
  <section
    onClick={props.onClick}
    onMouseDown={props.onMouseDown}
    onMouseUp={props.onMouseUp}
    onMouseMove={props.onMouseMove}
  >
    <Layer />
    <Layer shadow />
    <Grid />

    <style jsx>{`
      section {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 1;
        cursor: crosshair;
        overflow: scroll;
      }
    `}</style>
  </section>
);

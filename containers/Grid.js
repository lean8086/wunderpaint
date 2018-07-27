import { connect } from 'react-redux';
import Grid from '../components/Grid';

const GridContainer = ({ grid, scale, width, height }) => (
  <Grid
    hidden={!grid || scale <= 3}
    gridSize={scale}
    width={width * scale}
    height={height * scale}
  />
);

const mapStateToProps = state => ({
  grid: state.grid,
  scale: state.scale,
  width: state.width,
  height: state.height,
});

export default connect(mapStateToProps)(GridContainer);

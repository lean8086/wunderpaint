import { connect } from 'react-redux';
import { toggleGrid } from '../store';
import ToggleGrid from '../components/ToggleGrid';

const ToggleGridContainer = ({ grid, toggleGrid }) => (
  <ToggleGrid
    onMouseDown={() => toggleGrid()}
    selected={grid}
  />
);

const mapStateToProps = (state) => ({
  grid: state.grid,
});

const mapDispatchToProps = {
  toggleGrid,
};

export default connect(mapStateToProps, mapDispatchToProps)(ToggleGridContainer);

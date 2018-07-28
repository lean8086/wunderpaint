import { connect } from 'react-redux';
import { increaseScale, decreaseScale } from '../store';
import Zoom from '../components/Zoom';

const ZoomContainer = ({ increaseScale, decreaseScale, scale }) => (
  <Zoom
    increaseScale={() => increaseScale()}
    decreaseScale={() => decreaseScale()}
    blockIncrease={scale >= 32}
    blockDecrease={scale <= 0}
    percentage={100 * scale}
  />
);

const mapStateToProps = state => ({
  scale: state.scale,
});

const mapDispatchToProps = {
  increaseScale,
  decreaseScale,
};

export default connect(mapStateToProps, mapDispatchToProps)(ZoomContainer);

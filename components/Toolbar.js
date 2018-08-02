import New from './New';
import Zoom from '../containers/Zoom';
import ToggleGrid from '../containers/ToggleGrid';
import ColorPicker from '../containers/ColorPicker';

const Toolbar = (props) => (
  <div>
    <New />
    <Zoom />
    <ToggleGrid />
    <ColorPicker />

    <style jsx>{`
      div {
        z-index: 99;
        position: fixed;
      }
    `}</style>
  </div>
);

export default Toolbar;

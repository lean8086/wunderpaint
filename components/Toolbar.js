import New from './New';
import Zoom from '../containers/Zoom';
// import ToggleGrid from './ToggleGrid';
// import ColorPicker from './ColorPicker';

const Toolbar = (props) => (
  <div>
    <New />
    <Zoom />
    <style jsx>{`
      div {
        z-index: 99;
        position: absolute;
      }
      `}</style>
  </div>
);
// <ColorPicker />
// <ToggleGrid />
// <Zoom />

export default Toolbar;

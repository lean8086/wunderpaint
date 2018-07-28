import New from './New';
import Zoom from '../containers/Zoom';
import ToggleGrid from '../containers/ToggleGrid';
// import ColorPicker from './ColorPicker';

const Toolbar = (props) => (
  <div>
    <New />
    <Zoom />
    <ToggleGrid />
    <style jsx>{`
      div {
        z-index: 99;
        position: absolute;
      }
    `}</style>
  </div>
);

export default Toolbar;

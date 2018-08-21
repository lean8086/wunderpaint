import New from './New';
import Zoom from '../containers/Zoom';
import ToggleGrid from '../containers/ToggleGrid';
import ColorPicker from '../containers/ColorPicker';
import User from '../components/User';

const Toolbar = (props) => (
  <div className="toolbar">
    <New />
    <Zoom />
    <ToggleGrid />
    <ColorPicker />
    <User />

    <style jsx>{`
      .toolbar {
        z-index: 99;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
      }
    `}</style>
  </div>
);

export default Toolbar;

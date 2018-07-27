import Toolbar from '../components/Toolbar';
import Workspace from '../containers/Workspace';
// import Toolbox from '../components/Toolbox';

const App = ({ id, sync, preloaded }) => (
  <div>
    <Toolbar />
    <Workspace sync={sync}/>
  </div>
);

export default App;

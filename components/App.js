import Toolbar from '../components/Toolbar';
import Workspace from '../containers/Workspace';
// import Toolbox from '../components/Toolbox';

const App = ({ id, sync, preloaded }) => (
  <div>
    <Toolbar />
    <Workspace sync={sync}/>
    <style jsx global>{`
      *,
      *::before,
      *::after {
        box-sizing: border-box;
      }
    `}</style>
  </div>
);

export default App;

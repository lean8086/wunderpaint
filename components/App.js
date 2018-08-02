import Toolbar from '../components/Toolbar';
import Workspace from '../containers/Workspace';
import Toolbox from '../containers/Toolbox';

const App = () => (
  <div>
    <Toolbar />
    <Workspace />
    <Toolbox />

    <style jsx global>{`
      *,
      *::before,
      *::after {
        box-sizing: border-box;
      }

      body {
        margin: 0;
      }
    `}</style>
  </div>
);

export default App;

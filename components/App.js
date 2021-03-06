import { Fragment } from 'react';
import Toolbar from '../components/Toolbar';
import Workspace from '../containers/Workspace';
import Toolbox from '../containers/Toolbox';

const App = () => (
  <Fragment>
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
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: auto;
        padding: 75px;
        background: #fff;
      }
    `}</style>
  </Fragment>
);

export default App;

import { withRouter } from 'next/router';
import firebase from '../src/firebase';
import Toolbar from '../components/Toolbar';
// import Toolbox from '../components/Toolbox';
// import Workspace from '../components/Workspace';

const Work = withRouter(({ router, ref, work }) => (
  <div>
    <Toolbar />

  </div>
));

// <Workspace
//   id={router.query.id}
//   sync={() => ref.set(attrs)}
//   {...work}
// />
// <Toolbox />

Work.getInitialProps = async ({ query }) => {
  let work;
  const ref = await firebase.database().ref(`works/${query.id}`);
  await ref.once('value', snapshot => work = snapshot.val());
  return { ref, work };
};

export default Work;

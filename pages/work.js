import { withRouter } from 'next/router';
import firebase from '../firebase';
import { Provider } from 'react-redux';
import store from '../store';
import App from '../components/App';

const Work = withRouter(({ router, ref, preloaded }) => (
  <Provider store={store}>
    <App
      id={router.query.id}
      sync={() => ref.set(attrs)}
      preloaded={preloaded}
    />
  </Provider>
));

Work.getInitialProps = async ({ query }) => {
  let preloaded;
  const ref = await firebase.database().ref(`works/${query.id}`);
  await ref.once('value', snapshot => preloaded = snapshot.val());
  return { ref, preloaded };
};

export default Work;

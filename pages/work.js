import { Provider } from 'react-redux';
import { workReference } from '../firebase';
import createStore from '../store';
import App from '../components/App';

const Work = ({ preloaded }) => (
  <Provider store={createStore(preloaded)}>
    <App />
  </Provider>
);

Work.getInitialProps = async ({ query }) => {
  let preloaded = {};
  await workReference(query.id)
    .once('value')
    .then(snapshot => preloaded = {
      ...snapshot.val(),
      preloaded: true,
    });
  return { preloaded };
};

export default Work;

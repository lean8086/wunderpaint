import { Provider } from 'react-redux';
import { getRefById } from '../firebase';
import createStore from '../store';
import App from '../components/App';

const Work = ({ preloaded }) => (
  <Provider store={createStore(preloaded)}>
    <App />
  </Provider>
);

Work.getInitialProps = async ({ query }) => {
  let preloaded;
  await getRefById(query.id)
    .once('value')
    .then(snapshot => (
      preloaded = snapshot.exists() ? snapshot.val() : { id: query.id }
    ));
  return { preloaded };
};

export default Work;

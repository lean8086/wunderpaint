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
    .then((snapshot) => {
      if (snapshot.exists()) preloaded = snapshot.val();
    });
  return { preloaded };
};

export default Work;

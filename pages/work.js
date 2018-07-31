import { withRouter } from 'next/router';
import { Provider } from 'react-redux';
import { getRefById } from '../firebase';
import store from '../store';
import App from '../components/App';

const Work = withRouter(({ router, preloaded }) => (
  <Provider store={store}>
    <div>
      <App preloaded={preloaded}/>
    </div>
  </Provider>
));

Work.getInitialProps = async ({ query }) => {
  let preloaded;
  await getRefById(query.id).once('value', res => preloaded = res.val());
  return { preloaded };
};

export default Work;

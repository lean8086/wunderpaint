import { Provider } from 'react-redux';
import createStore from '../store';
import App from '../components/App';

export default () => (
  <Provider store={createStore()}>
    <App />
  </Provider>
);

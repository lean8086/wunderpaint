import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const config = {
  apiKey: 'AIzaSyCJnfKVhoBw6aoupX1xhbb0X_w-nGqJpC8',
  authDomain: 'lodpi-63998.firebaseapp.com',
  databaseURL: 'https://lodpi-63998.firebaseio.com',
  // storageBucket: '<BUCKET>.appspot.com',
};

/**
 * App instance
 */
const app = !firebase.apps.length ? firebase.initializeApp(config) : firebase.app();
/**
 * User
 */
export const getUser = () => new Promise(resolve => (
  app.auth().onAuthStateChanged(user => resolve(user || {}))
));
/**
 * Reference to the realtime database
 */
export const workReference = id => app.database().ref(`works/${id}`);
export const userReference = id => app.database().ref(`users/${id}`);

export default app;

import firebase from 'firebase';

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
 * Allow to interact with database until the user authenticates
 */
// app.auth().signInAnonymously();
/**
 * Reference to the realtime database
 */
export const workReference = id => app.database().ref(`works/${id}`);

export default app;

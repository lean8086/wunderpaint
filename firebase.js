import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyCJnfKVhoBw6aoupX1xhbb0X_w-nGqJpC8',
  authDomain: 'lodpi-63998.firebaseapp.com',
  databaseURL: 'https://lodpi-63998.firebaseio.com',
  // storageBucket: '<BUCKET>.appspot.com',
};

const app = !firebase.apps.length ? firebase.initializeApp(config) : firebase.app();

export const getRefById = id => app.database().ref(`works/${id}`);

export default app;

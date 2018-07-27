import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyCJnfKVhoBw6aoupX1xhbb0X_w-nGqJpC8',
  authDomain: 'lodpi-63998.firebaseapp.com',
  databaseURL: 'https://lodpi-63998.firebaseio.com',
  // storageBucket: '<BUCKET>.appspot.com',
};

export default !firebase.apps.length ? firebase.initializeApp(config) : firebase.app();
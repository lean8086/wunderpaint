import firebase from 'firebase';
import firebaseApp from '../firebase';
import { Component } from 'react';

export default class extends Component {
  componentDidMount() {
    const email = localStorage.getItem('emailForSignIn');
    var credential = firebase.auth.EmailAuthProvider.credentialWithLink(email, location.href);
    // firebase.auth().currentUser.linkAndRetrieveDataWithCredential(credential)
    // .then(function(usercred) {
    //   // The provider is now successfully linked.
    //   // The phone user can now sign in with their phone number or email.
    //   console.log(usercred)
    // });
    // const credential = firebase.auth.EmailAuthProvider.credential(email, 'password');
    // firebaseApp.auth().currentUser.linkAndRetrieveDataWithCredential(credential).then(function(usercred) {
    //   var user = usercred.user;
    //   console.log("Anonymous account successfully upgraded", user);
    // }, function(error) {
    //   console.log("Error upgrading anonymous account", error);
    // });
  }

  getInitialProps({ query }) {
    console.log(query);
    return { awe: true };
  }

  render() {
    return (
      <div>
        nada
      </div>
    );
  }
};

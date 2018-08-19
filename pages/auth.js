import { Fragment, Component } from 'react';
import firebase from '../firebase';
import Login from '../components/Login';
import Signup from '../components/Signup';
import Confirm from '../components/Confirm';

const actionCodeSettings = {
  url: 'http://localhost:3000/confirm',
  handleCodeInApp: true,
};

export default class extends Component {
  state = {
    email: '',
    sent: false,
  }

  static async getInitialProps({ query }) {
    return { type: query.type };
  }

  handleEmail({ target }) {
    this.setState({ email: target.value });
  }

  handleSubmit(ev) {
    ev.preventDefault();
    firebase.auth()
      .sendSignInLinkToEmail(this.state.email, actionCodeSettings)
      .then(() => localStorage.setItem('emailForSignIn', this.state.email))
      .then(() => this.setState({ sent: true }));
  }

  render() {
    const Auth = this.props.type === 'login' ? Login : Signup;
    return !this.state.sent ?
      <Auth
        onChange={(ev) => this.handleEmail(ev)}
        onSubmit={(ev) => this.handleSubmit(ev)}
      />
      :
      <Confirm email={this.state.email}/>
  }
};

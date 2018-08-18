import { Fragment, Component } from 'react';
import firebase from '../firebase';
import Link from 'next/link';

const actionCodeSettings = {
  url: 'http://localhost:3000/confirm',
  handleCodeInApp: true,
};

export default class extends Component {
  state = {
    email: '',
  }

  handleEmail({ target }) {
    this.setState({ email: target.value });
  }

  handleSubmit(ev) {
    ev.preventDefault();
    firebase.auth()
      .sendSignInLinkToEmail(this.state.email, actionCodeSettings)
      .then(() => localStorage.setItem('emailForSignIn', this.state.email));
  }

  render() {
    return (
      <Fragment>
        <h1>Log In to X</h1>
        <form onSubmit={(ev) => this.handleSubmit(ev)}>
          <input
            onChange={(ev) => this.handleEmail(ev)}
            type="email"
            required
            placeholder="you@domain.com"
          />
          <button type="submit">Login</button>
        </form>
        <Link href="/signup">
          <a>Don’t have an account? Sign Up</a>
        </Link>
      </Fragment>
    );
  }
};

// Awaiting Confirmation
// We sent an email to lean8086@gmail.com (undo).
//
// Please log in to Gmail, verify that the provided security code matches the following text:
//
// Sunny Clouded Leopard

// Waiting for your confirmation...

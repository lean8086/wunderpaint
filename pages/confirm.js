import { Fragment, Component } from 'react';
import firebase from '../firebase';

export default class extends Component {
  static async getInitialProps({ query }) {
    return { email: query.email };
  }

  componentDidMount() {
    firebase.auth()
      .signInWithEmailLink(this.props.email, location.href)
      .then((algo) => console.log(algo));
  }

  render() {
    return (
      <Fragment>
        <h1>Email Address Confirmed</h1>
        <p>You have been correctly authenticated. You may now close this window!</p>
      </Fragment>
    );
  }
};

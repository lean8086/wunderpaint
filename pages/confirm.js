import { Fragment, Component } from 'react';
import firebase from '../firebase';

export default class extends Component {
  state = {
    confirmed: false,
  }

  static async getInitialProps({ query }) {
    return { email: query.email };
  }

  componentDidMount() {
    firebase.auth()
      .signInWithEmailLink(this.props.email, location.href)
      .then(({ user }) => this.setState({ confirmed: !!user }));
  }

  render() {
    return !this.state.confirmed ?
      <Fragment>
        <h1>Verifying...</h1>
      </Fragment>
      :
      <Fragment>
        <h1>Email Address Confirmed</h1>
        <p>You have been correctly authenticated. You may now close this window!</p>
      </Fragment>
      ;
  }
};

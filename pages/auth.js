import { Fragment, Component } from 'react';
import { connect } from 'react-redux';
import firebase from '../firebase';
import Auth from '../components/Auth';
import Router from 'next/router';

class AuthContainer extends Component {
  state = {
    email: '',
    sent: false,
  }

  static async getInitialProps({ query }) {
    return { type: query.type };
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => !!user ? Router.push('/') : null);
  }

  handleEmail({ target }) {
    this.setState({ email: target.value });
  }

  handleSubmit(ev) {
    ev.preventDefault();
    firebase.auth()
      .sendSignInLinkToEmail(this.state.email, {
        url: `http://localhost:3000/confirm?email=${encodeURIComponent(this.state.email)}`,
        handleCodeInApp: true,
      })
      .then(() => this.setState({ sent: true }));
  }

  render() {
    return (
      <Auth
        {...this.state}
        type={this.props.type}
        onChange={(ev) => this.handleEmail(ev)}
        onSubmit={(ev) => this.handleSubmit(ev)}
      />
    );
  }
};

const mapStateToProps = state => ({
  user: state.user,
});

export default connect(mapStateToProps)(AuthContainer);

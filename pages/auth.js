import { Fragment, Component } from 'react';
import { connect } from 'react-redux';
import firebase from '../firebase';
import Login from '../components/Login';
import Signup from '../components/Signup';
import AwaitingConfirmation from '../components/AwaitingConfirmation';

class Auth extends Component {
  state = {
    email: '',
    sent: false,
  }

  static async getInitialProps({ query }) {
    return { type: query.type };
  }

  componentDidMount() {
    // firebase.auth().onAuthStateChanged(user => console.log(user));
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
    console.log('login', this.props.user);
    const Auth = this.props.type === 'login' ? Login : Signup;
    return !this.state.sent ?
      <Auth
        onChange={(ev) => this.handleEmail(ev)}
        onSubmit={(ev) => this.handleSubmit(ev)}
      />
      :
      <AwaitingConfirmation
        email={this.state.email}
        type={this.props.type}
      />
  }
};

const mapStateToProps = state => ({
  user: state.user,
});

export default connect(mapStateToProps)(Auth);

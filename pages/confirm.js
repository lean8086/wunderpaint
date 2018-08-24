import { Component } from 'react';
import { connect } from 'react-redux';
import { setUser } from '../store';
import firebase from '../firebase';
import Confirm from '../components/Confirm';

class ConfirmContainer extends Component {
  static async getInitialProps({ query }) {
    return { email: query.email };
  }

  componentDidMount() {
    if (!firebase.auth().isSignInWithEmailLink(location.href)) return;
    firebase.auth()
      .signInWithEmailLink(this.props.email, location.href)
      .then(({ user }) => this.props.setUser({
        uid: user.uid,
        email: user.email,
      }));
  }

  render() {
    return <Confirm verified={!!this.props.user} />;
  }
};

const mapStateToProps = state => ({
  user: state.user,
});

const mapDispatchToProps = {
  setUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(ConfirmContainer);

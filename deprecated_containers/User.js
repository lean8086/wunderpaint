import { Component } from 'react';
import { connect } from 'react-redux';
import { setUser } from '../store';
import { getUser } from '../firebase';
import User from '../components/User';

class UserContainer extends Component {
  componentDidMount() {
    if (!this.props.user) {
      getUser().then(({ uid, email }) => this.props.setUser({ uid, email }));
    }
  }

  render() {
    return <User {...this.props.user}/>;
  }
};

const mapStateToProps = state => ({
  user: state.user,
});

const mapDispatchToProps = {
  setUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);

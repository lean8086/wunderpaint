import { Component } from 'react';
import { getUser } from '../firebase';

export default class extends Component {
  state = {
    user: null,
  }

  componentDidMount() {
    getUser().then(user => this.setState({ user }));
  }

  render() {
    return (
      <div>{this.state.user ? this.state.user.email : 'nope'}</div>
    );
  }
};

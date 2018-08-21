import { Component } from 'react';
import { getUser } from '../firebase';

export default class extends Component {
  state = {
    email: '',
  }

  componentDidMount() {
    getUser().then(({ email }) => this.setState({ email }));
  }

  render() {
    return (
      <div>{this.state.email}</div>
    );
  }
};

import { Fragment, Component } from 'react';
import { getUser } from '../firebase';
import Link from 'next/link';

export default class extends Component {
  state = {
    email: null,
  }

  componentDidMount() {
    getUser().then(({ email }) => this.setState({ email }));
  }

  render() {
    const { email } = this.state;
    return (
      <div>{
        email ? email :
        <Fragment>
          <Link href="/login">
            <a>Login</a>
          </Link>
          <Link href="/signup">
            <a>Join free</a>
          </Link>
        </Fragment>
      }</div>
    );
  }
};

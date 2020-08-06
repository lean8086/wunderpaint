import { Fragment } from 'react';
import Link from 'next/link';

export default ({ displayName }) => (
  displayName ?
    <Fragment>
      {displayName}
    </Fragment>
  :
    <Fragment>
      <Link href="/login">
        <a>Login</a>
      </Link>
      <Link href="/signup">
        <a>Join free</a>
      </Link>
    </Fragment>
);

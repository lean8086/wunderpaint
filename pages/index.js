import { Fragment } from 'react';
import Link from 'next/link';
import User from '../containers/User';

export default () => (
  <Fragment>
    <p>Hello</p>
    <User />
    <ul>
      <li>
        <Link href="/new">
          <a>New</a>
        </Link>
      </li>
      <li>
        <Link as="/p/0Rlm5q5BF" href="/work?id=0Rlm5q5BF">
          <a>0Rlm5q5BF</a>
        </Link>
      </li>
    </ul>
  </Fragment>
);

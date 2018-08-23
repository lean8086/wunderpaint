import { Fragment } from 'react';
import Link from 'next/link';
import User from '../components/User';

export default () => (
  <Fragment>
    <p>Hello</p>
    <User />
    <ul>
      <li>
        <a href="/new">New</a>
      </li>
      <li>
        <Link as="/p/0Rlm5q5BF" href="/work?id=0Rlm5q5BF">
          <a>0Rlm5q5BF</a>
        </Link>
      </li>
    </ul>
  </Fragment>
);

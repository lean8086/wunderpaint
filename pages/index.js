import { Fragment } from 'react';
import Link from 'next/link';
import { generate } from 'shortid';
import New from '../components/New'

const blankId = generate();

const Landing = () => (
  <Fragment>
    <p>Hello</p>
    <ul>
      <li>
        <New />
      </li>
      <li>
        <Link as="/w/0Rlm5q5BF" href="/work?id=0Rlm5q5BF">
          <a>0Rlm5q5BF</a>
        </Link>
      </li>
    </ul>
  </Fragment>
);

export default Landing;

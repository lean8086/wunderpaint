import Link from 'next/link';
import { generate } from 'shortid';

const blankId = generate();

const Landing = () => (
  <div>
    <p>Hello</p>
    <ul>
      <li>
        <Link as={`/w/${blankId}`} href={`/work?id=${blankId}`}>
          <a>New</a>
        </Link>
      </li>
      <li>
        <Link as={`/w/${'rJKkFx0DM'}`} href={`/work?id=${'rJKkFx0DM'}`}>
          <a>rJKkFx0DM</a>
        </Link>
      </li>
    </ul>
  </div>
);

export default Landing;
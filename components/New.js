import Link from 'next/link';
import { generate } from 'shortid';

const id = generate();

export default () => (
  <Link as={`/w/${id}`} href={`/work?id=${id}`}>
    <a>New</a>
  </Link>
);
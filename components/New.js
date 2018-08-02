import Link from 'next/link';
import { generate } from 'shortid';

export default () => (
  <a href={`/w/${generate()}`}>New</a>
);

import { Fragment } from 'react';
import Link from 'next/link';

export default ({ email, type }) => (
  <Fragment>
    <h1>Awaiting Confirmation</h1>
    <p>We sent an email to {email} (<Link href={`/${type}`}><a>undo</a></Link>).</p>
    <p>Waiting for your confirmation...</p>
  </Fragment>
);

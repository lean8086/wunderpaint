import { Fragment } from 'react';
import Link from 'next/link';

export default ({ type, onChange, onSubmit }) => (
  <Fragment>
    <h1>Log In to X</h1>
    <p>After submitting the form, we’ll send you an email to confirm your login attempt.</p>
    <form onSubmit={onSubmit}>
      <input
        onChange={onChange}
        type="email"
        required
        placeholder="you@domain.com"
      />
      <button type="submit">Login</button>
    </form>
    <Link href="/signup">
      <a>Don’t have an account? Sign Up</a>
    </Link>
  </Fragment>
);

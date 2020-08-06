import { Fragment } from 'react';
import Link from 'next/link';

export default ({ type, onChange, onSubmit }) => (
  <Fragment>
    <h1>Sign Up for X</h1>
    <p>Join the most powerful serverless platform in the world and start deploying within seconds.</p>
    <form onSubmit={onSubmit}>
      <input
        onChange={onChange}
        type="email"
        required
        placeholder="you@domain.com"
      />
      <button type="submit">Join</button>
    </form>
    <p>By joining, you agree to our Terms of Service and Privacy Policy.</p>
    <Link href="/login">
      <a>Already have an account? Log In</a>
    </Link>
  </Fragment>
);

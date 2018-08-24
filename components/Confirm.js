import { Fragment } from 'react';

export default ({ verified }) => (
  !verified ?
    <Fragment>
      <h1>Verifying...</h1>
    </Fragment>
    :
    <Fragment>
      <h1>Email Address Confirmed</h1>
      <p>You have been correctly authenticated. You may now close this window!</p>
    </Fragment>
);

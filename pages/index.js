import { Fragment } from 'react';
import { connect } from 'react-redux';
import Link from 'next/link';
import User from '../containers/User';

const HomeContainer = ({ user }) => (
  <Fragment>
    <p>Hello</p>
    <User />
    <ul>
      <li>
        {user ?
          <Link href="/new">
            <a>New</a>
          </Link>
          :
          <Link href="/signup">
            <a>Start free</a>
          </Link>
        }
      </li>
      <li>
        <Link as="/p/0Rlm5q5BF" href="/work?id=0Rlm5q5BF">
          <a>0Rlm5q5BF</a>
        </Link>
      </li>
    </ul>
  </Fragment>
);

const mapStateToProps = state => ({
  user: state.user,
});

export default connect(mapStateToProps)(HomeContainer);

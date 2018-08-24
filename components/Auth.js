import Login from '../components/Login';
import Signup from '../components/Signup';
import AwaitingConfirmation from '../components/AwaitingConfirmation';

export default ({ type, sent, email, onChange, onSubmit }) => {
  const Auth = type === 'login' ? Login : Signup;
  return !sent ?
    <Auth
      onChange={onChange}
      onSubmit={onSubmit}
    />
    :
    <AwaitingConfirmation
      email={email}
      type={type}
    />
};

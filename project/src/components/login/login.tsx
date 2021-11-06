import {Link} from 'react-router-dom';

function Login(): JSX.Element {
  return (
    <Link className="header__nav-link header__nav-link--profile" to="/login">
      <div className="header__avatar-wrapper user__avatar-wrapper"></div>
      <span className="header__login">Sign in</span>
    </Link>
  );
}

export default Login;

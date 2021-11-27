import {Link} from 'react-router-dom';

function HeaderLogin(): JSX.Element {
  return (
    <Link className="header__nav-link header__nav-link--profile" to="/login">
      <div className="header__avatar-wrapper user__avatar-wrapper" />
      <span className="header__login">Sign in</span>
    </Link>
  );
}

export default HeaderLogin;

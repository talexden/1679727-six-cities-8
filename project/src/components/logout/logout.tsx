import {Link} from 'react-router-dom';

function Logout(): JSX.Element {
  return (
    <Link className="header__nav-link" to="/">
      <span className="header__signout">Sign out</span>
    </Link>
  );
}

export default Logout;

import HeaderLogo from '../header-logo/header-logo';
import UserProfile from '../header-user-profile/header-user-profile';
import Logout from '../header-logout/header-logout';
import {AuthorizationStatus} from '../../const';
import {StateType} from '../../types/state-type';
import {connect, ConnectedProps} from 'react-redux';


const mapStateToProps = ({authorizationStatus}: StateType) => ({
  authorizationStatus,
});

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;


function Header({authorizationStatus}: PropsFromRedux): JSX.Element {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <HeaderLogo />
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              <UserProfile />
              {authorizationStatus === AuthorizationStatus.Auth ? <Logout/> : ''}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export {Header};

export default connector(Header);

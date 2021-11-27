import {Link} from 'react-router-dom';
import {State} from '../../types/state-type';
import {connect, ConnectedProps} from 'react-redux';
import {AppRoute, AuthorizationStatus} from '../../const';


const mapStateToProps = ({authorizationStatus, authInfo}: State) => ({
  authorizationStatus,
  authInfo,
});

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;


function HeaderUserProfile({authorizationStatus, authInfo}: PropsFromRedux): JSX.Element {
  const userAuth = (authorizationStatus === AuthorizationStatus.Auth);
  return (
    <li className="header__nav-item user">
      <Link className="header__nav-link header__nav-link--profile" to={AppRoute.Favorites}>
        <div className="header__avatar-wrapper user__avatar-wrapper" />
        {
          userAuth ?
            <span className="header__user-name user__name">{authInfo.email}</span> :
            <span className="header__login">Sign in</span>
        }
      </Link>
    </li>
  );
}

export {HeaderUserProfile};

export default connector(HeaderUserProfile);

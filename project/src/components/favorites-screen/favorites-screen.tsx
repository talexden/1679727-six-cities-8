import HeaderLogo from '../header-logo/header-logo';
import Logout from '../header-logout/header-logout';
import UserProfile from '../header-user-profile/header-user-profile';
import {StateType} from '../../types/state-type';
import {connect, ConnectedProps} from 'react-redux';
import {useEffect} from 'react';
import {ThunkAppDispatch} from '../../types/action-type';
import {fetchFavoritesAction} from '../../store/api-actions';
import Favorites from '../favorites/favorites';
import FavoritesEmpty from '../favorites-empty/favorites-empty';


const mapStateToProps = ({favoriteOffers,   favoriteOffer}: StateType) => ({
  favoriteOffers,
  favoriteOffer,
});

const mapDispatchToProps = (dispatch: ThunkAppDispatch) => ({
  loadFavoriteOffers () {
    dispatch(fetchFavoritesAction());
  },
});

const connector = connect(mapStateToProps, mapDispatchToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;

function FavoritesScreen({favoriteOffers, favoriteOffer, loadFavoriteOffers}: PropsFromRedux): JSX.Element {
  useEffect(()=>{
    loadFavoriteOffers();
  }, [favoriteOffer]);

  return (
    <div className="page">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <HeaderLogo />
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <UserProfile />
                </li>
                <li className="header__nav-item">
                  <Logout />
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
      {favoriteOffers !== null && favoriteOffers.length > 0 ? <Favorites /> : <FavoritesEmpty />}
      <footer className="footer container">
        <a className="footer__logo-link" href="/">
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33" />
        </a>
      </footer>
    </div>
  );
}

export {FavoritesScreen};

export default connector(FavoritesScreen);

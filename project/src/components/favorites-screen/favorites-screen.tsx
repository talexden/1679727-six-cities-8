import Logo from '../logo/logo';
import Logout from '../logout/logout';
import UserProfile from '../user-profile/user-profile';
import FavoritesList from '../favorites-list/favorites-list';
import {FavoritesType} from '../../types/favoriteType';
import {OfferType} from '../../types/offerType';
import {getFavorites} from '../../filters';

type FavoritesScreenProps = {
  offers: OfferType[],
}


function FavoritesScreen({offers}: FavoritesScreenProps): JSX.Element {
  const favorites: FavoritesType = getFavorites(offers);
  return (
    <div className="page">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Logo />
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

      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              {[...favorites].map((favorite) => {
                return (
                  <FavoritesList
                    favoriteOffers={favorite[1]}
                    cityName ={favorite[0]}
                    key={favorite[0]}
                  />
                )}
              )}
            </ul>
          </section>
        </div>
      </main>
      <footer className="footer container">
        <a className="footer__logo-link" href="/">
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33" />
        </a>
      </footer>
    </div>
  );
}

export default FavoritesScreen;

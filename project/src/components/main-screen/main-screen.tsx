import PlaceCardScreen from '../place-card-screen/place-card-screen';
import Logo from '../logo/logo';
import Logout from '../logout/logout';
import UserProfile from '../user-profile/user-profile';
import Location from '../location/location';

type MainScreenProps = {
  count: number,
}

function MainScreen(data: MainScreenProps): JSX.Element {
  return (
    <div className="page page--gray page--main">
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

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <ul className="locations__list tabs__list">
              <li className="locations__item">
                <Location
                  locationLink = {'/'}
                  isActive = {false}
                  location = {'Paris'}
                />
              </li>
              <li className="locations__item">
                <Location
                  locationLink = {'/'}
                  isActive = {false}
                  location = {'Cologne'}
                />
              </li>
              <li className="locations__item">
                <Location
                  locationLink = {'/'}
                  isActive = {false}
                  location = {'Brussels'}
                />
              </li>
              <li className="locations__item">
                <Location
                  locationLink = {'/'}
                  isActive
                  location = {'Amsterdam'}
                />
              </li>
              <li className="locations__item">
                <Location
                  locationLink = {'/'}
                  isActive = {false}
                  location = {'Hamburg'}
                />
              </li>
              <li className="locations__item">
                <Location
                  locationLink = {'/'}
                  isActive = {false}
                  location = {'Dusseldorf'}
                />
              </li>
            </ul>
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{data.count} places to stay in Amsterdam</b>
              <form className="places__sorting" action="#" method="get">
                <span className="places__sorting-caption">Sort by</span>
                <span className="places__sorting-type" tabIndex={0}>
                  Popular
                  <svg className="places__sorting-arrow" width="7" height="4">
                    <use href="#icon-arrow-select"></use>
                  </svg>
                </span>
                <ul className="places__options places__options--custom places__options--opened">
                  <li className="places__option places__option--active" tabIndex={0}>Popular</li>
                  <li className="places__option" tabIndex={0}>Price: low to high</li>
                  <li className="places__option" tabIndex={0}>Price: high to low</li>
                  <li className="places__option" tabIndex={0}>Top rated first</li>
                </ul>
              </form>
              <div className="cities__places-list places__list tabs__content">
                <PlaceCardScreen />
                <PlaceCardScreen />
                <PlaceCardScreen />
                <PlaceCardScreen />
                <PlaceCardScreen />
              </div>
            </section>
            <div className="cities__right-section">
              <section className="cities__map map"></section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainScreen;

import Header from '../header/header';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../const';

function ErrorScreen(): JSX.Element {
  return (
    <div className="page page--favorites-empty">
      <Header />

      <main className="page__main page__main--favorites page__main--favorites-empty">
        <section className="favorites favorites--empty">
          <h1 className="visually-hidden">Favorites (empty)</h1>
          <div className="favorites__status-wrapper">
            <b className="favorites__status">404 Not Found.</b>
          </div>
        </section>
      </main>
      <footer className="footer">
        <Link className="footer__logo-link" to={AppRoute.Main}>
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33" />
        </Link>
      </footer>
    </div>
  );
}

export default ErrorScreen;

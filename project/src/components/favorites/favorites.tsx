import FavoritesCardList from '../favorites-card-list/favorites-card-list';
import {FavoritesMapType} from '../../types/favorite-map-type';
import {getMapOffersByCities} from '../../utils/filters';
import {nanoid} from 'nanoid';
import {OfferType} from '../../types/offer-type';

type FavoritesProps = {
  favoriteOffers: OfferType[],
}


function Favorites({favoriteOffers}: FavoritesProps): JSX.Element {
  const favorites: FavoritesMapType = getMapOffersByCities(favoriteOffers);
  return (
    <main className="page__main page__main--favorites">
      <div className="page__favorites-container container">
        <section className="favorites">
          <h1 className="favorites__title">Saved listing</h1>
          <ul className="favorites__list">
            {[...favorites].map((favorite) => <FavoritesCardList favoritesByCity={favorite[1]} cityName = {favorite[0]} key={nanoid()}/> )}
          </ul>
        </section>
      </div>
    </main>
  );
}

export default Favorites;

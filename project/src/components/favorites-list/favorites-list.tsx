import FavoritePlaceCard from '../favorite-place card/favorite-place-card';
import {Link} from 'react-router-dom';
import {OfferType} from '../../types/offerType';

type FavoritesListProps = {
  cityName: string,
  favoriteOffers: OfferType[],
}


function FavoritesList({favoriteOffers, cityName}: FavoritesListProps): JSX.Element {
  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <Link className="locations__item-link" to="/">
            <span>{cityName}</span>
          </Link>
        </div>
      </div>
      <div className="favorites__places">
        {favoriteOffers.map((offer) => {
          return (
            <FavoritePlaceCard
              offer={offer}
              key={offer.id}
            />
          )}
        )}
      </div>
    </li>
  );
}

export default FavoritesList;

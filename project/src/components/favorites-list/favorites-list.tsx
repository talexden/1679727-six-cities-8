import FavoritePlaceCard from '../favorite-place card/favorite-place-card';
import {Link} from 'react-router-dom';
import {OfferType} from '../../types/offerType';
import {FavoritesType} from "../../types/favoriteType";
import {getFavorites} from "../../filters";

type FavoritesListProps = {
  favoritesByCity: OfferType[],
  cityName: string,
}


function FavoritesList({favoritesByCity, cityName}: FavoritesListProps): JSX.Element {
  console.log('favoritesByCity: ', favoritesByCity);
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
        {favoritesByCity.map((offer) => {
          console.log('offer: ', offer);
          return (
            <FavoritePlaceCard
              offer={offer}
              key={`${offer.id}-${offer.title}`}
            />
          )}
        )}
      </div>
    </li>
  );
}

export default FavoritesList;

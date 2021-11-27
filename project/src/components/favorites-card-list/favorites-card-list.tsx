import FavoritePlaceCard from '../favorite-place card/favorite-place-card';
import {Link} from 'react-router-dom';
import {OfferType} from '../../types/offer-type';
import {nanoid} from 'nanoid';

type FavoritesListProps = {
  favoritesByCity: OfferType[],
  cityName: string,
}


function FavoritesCardList({favoritesByCity, cityName}: FavoritesListProps): JSX.Element {
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
        {favoritesByCity.map((offer) => <FavoritePlaceCard offer={offer} key={nanoid()} />)}
      </div>
    </li>
  );
}

export default FavoritesCardList;

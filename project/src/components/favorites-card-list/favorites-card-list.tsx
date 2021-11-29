import FavoritePlaceCard from '../favorite-place card/favorite-place-card';
import {Link} from 'react-router-dom';
import {OfferType} from '../../types/offer-type';
import {nanoid} from 'nanoid';
import {StateType} from '../../types/state-type';
import {ThunkAppDispatch} from '../../types/action-type';
import {connect, ConnectedProps} from 'react-redux';
import {redirectToRoute, setCity} from '../../store/action';
import {AppRoute} from '../../const';
import {fetchFavoritesAction, postFavoriteAction} from '../../store/api-actions';

type FavoritesListProps = {
  favoritesByCity: OfferType[],
  cityName: string,
}

const mapStateToProps = ({favoriteOffers}: StateType) => ({
  favoriteOffers,
});

const mapDispatchToProps = (dispatch: ThunkAppDispatch) => ({
  redirectToMain (cityName: string) {
    dispatch(setCity(cityName));
    dispatch(redirectToRoute(AppRoute.Main));
  },
  onClickFavorite(offer: OfferType) {
    const status = Number(!offer.isFavorite);
    dispatch(postFavoriteAction(offer.id, status));
    dispatch(fetchFavoritesAction());
  },
});

const connector = connect(mapStateToProps, mapDispatchToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;
type ConnectedComponentProps = PropsFromRedux & FavoritesListProps;

function FavoritesCardList({favoritesByCity, cityName, redirectToMain, onClickFavorite}: ConnectedComponentProps): JSX.Element {
  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <Link
            className="locations__item-link"
            to="#"
            onClick={()=>redirectToMain(cityName) }
          >
            <span>{cityName}</span>
          </Link>
        </div>
      </div>
      <div className="favorites__places">
        {favoritesByCity.map((offer) => (
          <FavoritePlaceCard
            offer={offer}
            key={nanoid()}
            onClickFavorite={()=> onClickFavorite(offer) }
          />
        ))}
      </div>
    </li>
  );
}

export {FavoritesCardList};
export default connector(FavoritesCardList);

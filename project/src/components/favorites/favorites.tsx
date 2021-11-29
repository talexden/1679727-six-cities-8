import FavoritesCardList from '../favorites-card-list/favorites-card-list';
import {FavoritesMapType} from '../../types/favorite-map-type';
import {getMapOffersByCities} from '../../utils/filters';
import {nanoid} from 'nanoid';
import {StateType} from '../../types/state-type';
import {ThunkAppDispatch} from '../../types/action-type';
import {fetchFavoritesAction} from '../../store/api-actions';
import {connect, ConnectedProps} from 'react-redux';

const mapStateToProps = ({favoriteOffers}: StateType) => ({
  favoriteOffers,
});

const mapDispatchToProps = (dispatch: ThunkAppDispatch) => ({
  loadFavoriteOffers () {
    dispatch(fetchFavoritesAction());
  },
});

const connector = connect(mapStateToProps, mapDispatchToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;


function Favorites({favoriteOffers}: PropsFromRedux): JSX.Element {
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

export {Favorites};

export default connector(Favorites);

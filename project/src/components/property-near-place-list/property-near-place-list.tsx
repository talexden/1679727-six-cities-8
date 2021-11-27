import {OfferType} from '../../types/offer-type';
import PropertyNearCard from '../property-near-place-card/property-near-place-card';
import {AppRoute, MAX_NEAR_OFFERS} from '../../const';
import {ThunkAppDispatch} from '../../types/action-type';
import {connect, ConnectedProps} from 'react-redux';
import {redirectToRoute} from '../../store/action';
import { nanoid } from 'nanoid';
import {postFavoriteAction} from '../../store/api-actions';

type PropertyNearPlaceListProps = {
  nearbyOffers: OfferType[],
  loadSelectedOffer: (offerId: number) => void,
}

const mapDispatchToProps = (dispatch: ThunkAppDispatch) =>({
  onClick(offerId: number) {
    dispatch(redirectToRoute(`${AppRoute.Offer}/${offerId}`));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  },
  onClickFavorite(offer: OfferType) {
    const status = Number(!offer.isFavorite);
    dispatch(postFavoriteAction(offer.id, status));
  },
});

const connector = connect(null, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;
type ConnectedComponentProps = PropsFromRedux & PropertyNearPlaceListProps;

function PropertyNearPlaceList ({nearbyOffers, onClick, loadSelectedOffer, onClickFavorite}: ConnectedComponentProps): JSX.Element {
  return (
    <div className="near-places__list places__list">
      {
        nearbyOffers.slice(0, MAX_NEAR_OFFERS).map((offer) =>
          (
            <PropertyNearCard
              onClick={()=>{
                onClick(offer.id);
                loadSelectedOffer(offer.id);
              }}
              offer={offer}
              key={nanoid()}
              onClickFavorite={() => {
                onClickFavorite(offer);
              }}
            />
          ))
      }
    </div>
  );
}

export {PropertyNearPlaceList};

export default connector(PropertyNearPlaceList);

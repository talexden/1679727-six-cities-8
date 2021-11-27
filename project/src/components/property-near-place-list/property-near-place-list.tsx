import {OfferType} from '../../types/offer-type';
import PropertyNearCard from '../property-near-place-card/property-near-place-card';
import {AppRoute, MAX_NEAR_OFFERS} from '../../const';
import {ThunkAppDispatch} from '../../types/action-type';
import {connect, ConnectedProps} from 'react-redux';
import {redirectToRoute} from '../../store/action';
import { nanoid } from 'nanoid';

type PropertyNearPlaceListProps = {
  nearbyOffers: OfferType[],
  loadSelectedOffer: (offerId: number) => void,
}

const mapDispatchToProps = (dispatch: ThunkAppDispatch) =>({
  redirectToOffer(offerId: number) {
    dispatch(redirectToRoute(`${AppRoute.Offer}/${offerId}`));
  },
});

const connector = connect(null, mapDispatchToProps);
type ConnectedComponentProps = PropsFromRedux & PropertyNearPlaceListProps;


type PropsFromRedux = ConnectedProps<typeof connector>;


function PropertyNearPlaceList ({nearbyOffers, redirectToOffer, loadSelectedOffer}: ConnectedComponentProps): JSX.Element {
  const handlerClick = (offerId: number) => {
    loadSelectedOffer(offerId);
    redirectToOffer(offerId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <div className="near-places__list places__list">
      {
        nearbyOffers.slice(0, MAX_NEAR_OFFERS).map((offer) =>
          (
            <PropertyNearCard onClick={()=>{handlerClick(offer.id);}} offer={offer} key={nanoid()} />
          ))
      }
    </div>
  );
}

export {PropertyNearPlaceList};

export default connector(PropertyNearPlaceList);

import {OfferType} from '../../types/offer-type';
import PropertyNearCard from '../property-near-place-card/property-near-place-card';
import {MAX_NEAR_OFFERS} from '../../const';
import {ThunkAppDispatch} from '../../types/action-type';
import {connect, ConnectedProps} from 'react-redux';
import {redirectToRoute} from '../../store/action';
import {fetchOfferByIdAction} from '../../store/api-actions';

type PropertyNearPlaceListProps = {
  offers: OfferType[],
}

const mapDispatchToProps = (dispatch: ThunkAppDispatch) =>({
  onClick(offerId: number) {
    dispatch(redirectToRoute(`/offer/${offerId}`));
    dispatch(fetchOfferByIdAction(offerId));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  },
});

const connector = connect(null, mapDispatchToProps);
type ConnectedComponentProps = PropsFromRedux & PropertyNearPlaceListProps;


type PropsFromRedux = ConnectedProps<typeof connector>;


function PropertyNearPlaceList ({offers, onClick}: ConnectedComponentProps): JSX.Element {

  return (
    <div className="near-places__list places__list">
      {
        offers.slice(0, MAX_NEAR_OFFERS).map((offer, id) =>
          (
            <PropertyNearCard onClick={()=>{onClick(offer.id);}} offer={offer} key={offer.title} />
          ))
      }
    </div>
  );
}

export {PropertyNearPlaceList};

export default connector(PropertyNearPlaceList);

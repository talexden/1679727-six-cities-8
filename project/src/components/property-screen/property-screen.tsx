import {getRatingStyle} from '../../utils/util';
import PropertyImageList from '../property-image-list/property-image-list';
import {State} from '../../types/state-type';
import {connect, ConnectedProps} from 'react-redux';
import {ThunkAppDispatch} from '../../types/action-type';
import {fetchCommentsByOfferAction, fetchNearbyOffersAction, fetchOfferByIdAction} from '../../store/api-actions';
import {useEffect} from 'react';
import {useParams} from 'react-router-dom';
import PropertyInsideList from '../property-inside-list/property-inside-list';
import PropertyNearPlaceList from '../property-near-place-list/property-near-place-list';
import Header from '../header/header';
import PropertyHost from '../property-host/property-host';
import PropertyReviews from '../property-reviews/property-reviews';
import Map from '../map/map';
import {MAX_NEAR_OFFERS} from '../../const';


const mapStateToProps = ({offerById, nearbyOffers}: State) => ({
  offerById,
  nearbyOffers,
});

const mapDispatchToProps = (dispatch: ThunkAppDispatch) => ({
  loadSelectedOffer(offerId: number) {
    dispatch(fetchOfferByIdAction(offerId));
    dispatch(fetchCommentsByOfferAction(offerId));
    dispatch(fetchNearbyOffersAction(offerId));
  },
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;


function PropertyScreen({offerById, nearbyOffers, loadSelectedOffer}: PropsFromRedux): JSX.Element {
  const offerId: {id: string} = useParams();
  useEffect(() => {
    loadSelectedOffer(Number(offerId.id));
  }, []);
  const offersOnMap = nearbyOffers.slice(0, MAX_NEAR_OFFERS);
  offersOnMap.push(offerById);
  const {images, type, rating, price, isFavorite, isPremium, title, bedrooms, maxAdults, goods} = offerById;

  return (
    <div className="page">
      <Header />
      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <PropertyImageList images={images} type={type}/>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              {
                isPremium &&
                <div className="property__mark">
                  <span>Premium</span>
                </div>
              }
              <div className="property__name-wrapper">
                <h1 className="property__name">
                  {title}
                </h1>
                <button className={`property__bookmark-button ${isFavorite ? 'property__bookmark-button--active ' : ''}button`} type="button">
                  <svg className="property__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark" />
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={getRatingStyle(rating)} />
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">{rating}</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {type}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {bedrooms} Bedrooms
                </li>
                <li className="property__feature property__feature--adults">
                  Max {maxAdults} adults
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <PropertyInsideList goods={goods} />
              </div>

              <PropertyHost />

              <PropertyReviews />
            </div>
          </div>
          <section className="property__map map">

            <Map offersList={offersOnMap} selectedOffer={offerById}/>

          </section>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>

            {useEffect(()=>{
              <PropertyNearPlaceList nearbyOffers={nearbyOffers} loadSelectedOffer={loadSelectedOffer}/>;
            }, [])}

            <PropertyNearPlaceList nearbyOffers={nearbyOffers} loadSelectedOffer={loadSelectedOffer}/>
          </section>
        </div>
      </main>
    </div>
  );
}

export {PropertyScreen};

export default connector(PropertyScreen);

import MainSortForm from '../main-sort-form/main-sort-form';
import OffersList from '../main-place-card-list/main-place-card-list';
import {StateType} from '../../types/state-type';
import {connect, ConnectedProps} from 'react-redux';
import Map from '../map/map';

const mapStateToProps = ({cityName, sortedCityOffers, selectedOffer}: StateType) => ({
  cityName,
  sortedCityOffers,
  selectedOffer,
});

const connector = connect(mapStateToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;

function MainCities({cityName, sortedCityOffers, selectedOffer}: PropsFromRedux): JSX.Element {
  return (
    <div className="cities">
      <div className="cities__places-container container">
        <section className="cities__places places">
          <h2 className="visually-hidden">Places</h2>
          <b className="places__found">{sortedCityOffers.length} places to stay in {cityName}</b>
          <MainSortForm />
          <OffersList />
        </section>
        <div className="cities__right-section">
          <section className="cities__map map">

            {sortedCityOffers.length ? <Map offersList={sortedCityOffers} selectedOffer={selectedOffer}/> : ''}

          </section>
        </div>
      </div>
    </div>
  );
}

export {MainCities};

export default connector(MainCities);

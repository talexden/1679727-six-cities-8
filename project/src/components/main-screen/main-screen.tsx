import LocationList from '../location-list/location-list';
import {State} from '../../types/state-type';
import {connect, ConnectedProps} from 'react-redux';
import {CITIES} from '../../const';
import Header from '../header/header';
import MainCities from '../main-cities/main-cities';
import MainCitiesEmpty from '../main-cities-empty/main-cities-empty';
import {useEffect} from 'react';
import {setCityOffers} from '../../store/action';
import {ThunkAppDispatch} from '../../types/action-type';
import {OfferType} from '../../types/offer-type';

const mapStateToProps = ({sortedCityOffers, offers, cityName}: State) => ({
  sortedCityOffers,
  offers,
  cityName,
});

const mapDispatchToProps = (dispatch: ThunkAppDispatch) => ({
  effectCityOffers(cityName: string, offers: OfferType[]) {
    dispatch(setCityOffers(cityName, offers));
  },
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;


function MainScreen({sortedCityOffers, offers, effectCityOffers, cityName}: PropsFromRedux): JSX.Element {
  const isCityOffers = sortedCityOffers.length > 0;
  useEffect(()=>{
    effectCityOffers(cityName, offers);
  }, [cityName, offers]);
  return (
    <div className="page page--gray page--main">
      <Header />

      <main className={`${isCityOffers ? '' : 'page__main--index-empty '}page__main page__main--index`}>
        <h1 className="visually-hidden">CITIES</h1>
        <div className="tabs">
          <section className="locations container">
            <LocationList cities={CITIES}/>
          </section>
        </div>
        {isCityOffers ? <MainCities /> : <MainCitiesEmpty />}
      </main>
    </div>
  );
}

export {MainScreen};

export default connector(MainScreen);

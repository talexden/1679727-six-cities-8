import LocationList from '../location-list/location-list';
import {StateType} from '../../types/state-type';
import {connect, ConnectedProps, useDispatch} from 'react-redux';
import {CITIES} from '../../const';
import Header from '../header/header';
import MainCities from '../main-cities/main-cities';
import MainCitiesEmpty from '../main-cities-empty/main-cities-empty';
import {useEffect} from 'react';
import {setCityOffers} from '../../store/action';
import {getCityOffers} from '../../utils/filters';

const mapStateToProps = ({cityOffers, offers, cityName}: StateType) => ({
  cityOffers,
  offers,
  cityName,
});

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;


function MainScreen({cityOffers, offers, cityName}: PropsFromRedux): JSX.Element {
  const dispatch = useDispatch();
  const isCityOffers = cityOffers.length > 0;
  useEffect(()=>{
    const newCityOffers = getCityOffers(cityName, offers);
    dispatch(setCityOffers(newCityOffers));
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

import {StateType} from '../../types/state-type';
import {connect, ConnectedProps} from 'react-redux';

const mapStateToProps = ({cityName}: StateType) => ({
  cityName,
});

const connector = connect(mapStateToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;

function MainCitiesEmpty({cityName}: PropsFromRedux):JSX.Element {
  return (
    <div className="cities">
      <div className="cities__places-container cities__places-container--empty container">
        <section className="cities__no-places">
          <div className="cities__status-wrapper tabs__content">
            <b className="cities__status">No places to stay available</b>
            <p className="cities__status-description">We could not find any property available at the moment in {cityName}</p>
          </div>
        </section>
        <div className="cities__right-section" />
      </div>
    </div>
  );
}

export {MainCitiesEmpty};

export default connector(MainCitiesEmpty);

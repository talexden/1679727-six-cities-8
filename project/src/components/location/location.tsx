import {Link} from 'react-router-dom';
import {State} from '../../types/state-type';
import {Dispatch} from 'redux';
import {Actions} from '../../types/action-type';
import {setCity} from '../../store/action';
import {connect, ConnectedProps} from 'react-redux';
import {OfferType} from '../../types/offer-type';


type LocationProps = {
  name: string
}

const mapStateToProps = ({cityName, offers}: State) => ({
  cityName: cityName,
  offers: offers,
});

const mapDispatchToProps = (dispatch: Dispatch<Actions>) => ({
  onSelectCity(city: string, offers: OfferType[]) {
    dispatch(setCity(city, offers));
  },
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;
type ConnectedComponentProps = PropsFromRedux & LocationProps;

function Location({name, cityName, offers, onSelectCity}: ConnectedComponentProps): JSX.Element {
  return (
    <Link
      className={`locations__item-link tabs__item${cityName === name ? ' tabs__item--active' : ''}`}
      to='/'
      onClick={() => onSelectCity(name, offers)}
    >
      <span>{name}</span>
    </Link>
  );
}

export {Location};

export default connector(Location);

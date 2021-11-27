import {Link} from 'react-router-dom';
import {State} from '../../types/state-type';
import {ThunkAppDispatch} from '../../types/action-type';
import {setCity} from '../../store/action';
import {connect, ConnectedProps} from 'react-redux';

type LocationProps = {
  name: string
}

const mapStateToProps = ({cityName}: State) => ({
  cityName,
});

const mapDispatchToProps = (dispatch: ThunkAppDispatch) => ({
  onSelectCity(city: string) {
    dispatch(setCity(city));
  },
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;
type ConnectedComponentProps = PropsFromRedux & LocationProps;

function Location({name, cityName, onSelectCity}: ConnectedComponentProps): JSX.Element {
  return (
    <Link
      className={`locations__item-link tabs__item${cityName === name ? ' tabs__item--active' : ''}`}
      to='/'
      onClick={() => onSelectCity(name)}
    >
      <span>{name}</span>
    </Link>
  );
}

export {Location};

export default connector(Location);

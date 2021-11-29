import {Link} from 'react-router-dom';
import {StateType} from '../../types/state-type';
import {setCity} from '../../store/action';
import {connect, ConnectedProps, useDispatch} from 'react-redux';

type LocationProps = {
  name: string
}

const mapStateToProps = ({cityName}: StateType) => ({
  cityName,
});

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;
type ConnectedComponentProps = PropsFromRedux & LocationProps;

function Location({name, cityName}: ConnectedComponentProps): JSX.Element {
  const dispatch = useDispatch();

  return (
    <Link
      className={`locations__item-link tabs__item${cityName === name ? ' tabs__item--active' : ''}`}
      to='/'
      onClick={() => dispatch(setCity(name))}
    >
      <span>{name}</span>
    </Link>
  );
}

export {Location};

export default connector(Location);

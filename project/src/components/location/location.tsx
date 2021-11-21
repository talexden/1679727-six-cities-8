import {Link} from 'react-router-dom';

type LocationProps = {
  isActive: boolean,
  name: string,
  onClickName: () => void,
}

function Location({name, onClickName, isActive}: LocationProps): JSX.Element {
  return (
    <Link
      className={`locations__item-link tabs__item${isActive ? ' tabs__item--active' : ''}`}
      to='/'
      onClick={onClickName}
    >
      <span>{name}</span>
    </Link>
  );
}

export default Location;

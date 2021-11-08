import {Link} from 'react-router-dom';

type LocationProps = {
  locationLink: string,
  isActive: boolean,
  location: string,
}

function Location(props: LocationProps): JSX.Element {
  return (
    <Link
      className={`locations__item-link tabs__item${props.isActive ? ' tabs__item--active' : ''}`}
      to={props.locationLink}
    >
      <span>{props.location}</span>
    </Link>
  );
}

export default Location;

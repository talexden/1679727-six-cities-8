import Location from '../location/location';
import {nanoid} from 'nanoid';

type LocationListProps = {
  cities: string[],
}

function LocationList({cities}: LocationListProps):JSX.Element {
  return (
    <ul className="locations__list tabs__list">
      {cities.map((city) => (
        <Location key={nanoid()} name={city} />
      ) )}
    </ul>
  );
}

export default LocationList;

import Location from '../location/location';

type LocationListProps = {
  cities: string[],
}

function LocationList({cities}: LocationListProps):JSX.Element {
  return (
    <ul className="locations__list tabs__list">
      {cities.map((city) => (
        <Location key={city} name={city} />
      ) )}
    </ul>
  );
}

export default LocationList;

import Location from '../location/location';
import {useState} from 'react';
import {setStateSelector} from '../../util';

type LocationListProps = {
  cities: string[],
}

function LocationList({cities}: LocationListProps):JSX.Element {
  const defaultStateCity = new Array(cities.length).fill(false);
  const [stateCity, setStateCity] = useState(setStateSelector(defaultStateCity, 2))
  return (
    <ul className="locations__list tabs__list">
      {cities.map((city, id) => {
         return (
           <Location
             key={`${id}-${city}`}
             name={city}
             // isActive={stateCity[id]}
             // onClickName={()=>{
             //   setStateCity(setStateSelector(defaultStateCity, id));
             // }}
           />
         )
      })}
    </ul>
  )
}

export default LocationList;

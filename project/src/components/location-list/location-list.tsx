import Location from '../location/location';
import {useState} from 'react';
import {setStateSelector} from '../../util';

const CITIES = ['Paris','Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf']


function LocationList():JSX.Element {
  const defaultStateCity = new Array(CITIES.length).fill(false);
  const [stateCity, setStateCity] = useState(setStateSelector(defaultStateCity, 2))
  return (
    <ul className="locations__list tabs__list">
      {CITIES.map((city, id) => {
         return (
           <Location
             key={`${id}-${city}`}
             name={city}
             isActive={stateCity[id]}
             onClickName={()=>{
               setStateCity(setStateSelector(defaultStateCity, id));
             }}
           />
         )
      })}
    </ul>
  )
}

export default LocationList;

import {MutableRefObject, useEffect, useState} from 'react';
import {Map, TileLayer} from 'leaflet';
import {MAP_TAILE_LAYER, MAP_TAILE_LAYER_ATTRIBUTIONS} from '../const';
import {CityType} from '../types/offer-type';


function useMap(mapRef: MutableRefObject<HTMLElement | null>, city: CityType): Map | null {
  const {location} = city;
  const [map, setMap] = useState<Map | null>(null);

  useEffect(() => {
    if (mapRef.current !== null && map === null) {
      const instance = new Map(mapRef.current, {
        center: {
          lat: location.latitude,
          lng: location.longitude,
        },
        zoom: location.zoom,
      });

      const layer = new TileLayer(
        MAP_TAILE_LAYER,
        {
          attribution:
          MAP_TAILE_LAYER_ATTRIBUTIONS,
        },
      );

      instance.addLayer(layer);

      setMap(instance);
    } else {
      map?.setView({
        lat: location.latitude,
        lng: location.longitude,
      }, location.zoom);
    }
  }, [mapRef, map, location, city]);

  return map;
}

export default useMap;

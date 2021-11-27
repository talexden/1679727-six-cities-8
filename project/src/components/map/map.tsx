import {useEffect, useRef} from 'react';
import {Icon, LayerGroup, Marker} from 'leaflet';
import 'leaflet/dist/leaflet.css';
import useMap from '../../hooks/use-map';
import {OfferType} from '../../types/offer-type';

export const URL_MARKER_DEFAULT = 'img/pin.svg';
export const URL_MARKER_SELECT = 'img/pin-active.svg';

const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [26, 40],
  iconAnchor: [13, 40],
});

const selectCustomIcon = new Icon({
  iconUrl: URL_MARKER_SELECT,
  iconSize: [26, 40],
  iconAnchor: [13, 40],
});

type MapProps = {
  offersList: OfferType[];
  selectedOffer: OfferType | null;
}

function Map({offersList, selectedOffer}: MapProps): JSX.Element {
  const [{city}] = offersList;
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);
  const markerLayerRef = useRef<LayerGroup>();

  useEffect(() => {
    if (map) {
      if (markerLayerRef.current) {
        markerLayerRef.current.clearLayers();
      }

      markerLayerRef.current = new LayerGroup().addTo(map);

      if (markerLayerRef.current) {
        offersList.forEach((offer) => {
          const {location} = offer;
          const marker = new Marker({
            lat: location.latitude,
            lng: location.longitude,
          });

          marker
            .setIcon(
              offer.id === selectedOffer?.id
                ? selectCustomIcon
                : defaultCustomIcon,
            )
            .addTo(markerLayerRef.current as LayerGroup);
        });
      }

    }
  }, [selectedOffer?.id, map, offersList]);

  return (
    <div
      style={{minHeight: '100%'}}
      ref={mapRef}
    >
    </div>
  );
}

export default Map;

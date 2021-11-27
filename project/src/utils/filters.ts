import {OfferType} from '../types/offer-type';
import {FavoritesMapType} from '../types/favorite-map-type';


function getMapOffersByCities(offers: OfferType[]): FavoritesMapType {
  const offersByCities = new Map();
  offers.forEach((offer) => {
    if (offersByCities.has(offer.city.name)) {
      offersByCities.get(offer.city.name).push(offer);
    } else {
      offersByCities.set(offer.city.name, [offer]);
    }
  });
  return offersByCities;
}

function getCityOffers(city: string, offers: OfferType[]): OfferType[] {
  return offers.filter((offer) => offer.city.name === city);
}

export {getMapOffersByCities, getCityOffers};

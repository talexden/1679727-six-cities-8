import {OfferType} from './types/offer-type';
import {FavoritesType} from './types/favorite-type';


function getFavorites(offers: OfferType[]): FavoritesType {
  const cityNames = new Map;
  offers.forEach((offer) => {
    if (offer.isFavorite) {
      if (cityNames.has(offer.city.name)) {
        cityNames.get(offer.city.name).push(offer);
      } else {
        cityNames.set(offer.city.name, [offer]);
      }
    }
  })
  return cityNames;
}

function getCityOffers(city: string, offers: OfferType[]): OfferType[] {
  return offers.filter((offer) => offer.city.name === city);
}

export {getFavorites, getCityOffers};

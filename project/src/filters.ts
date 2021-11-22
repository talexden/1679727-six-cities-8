import {OfferType} from './types/offerType';
import {FavoritesType} from './types/favoriteType';


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

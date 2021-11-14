import {offerType} from './types/offerType';
import {favoritesType} from './types/favoriteType';


function getFavorites(offers: offerType[]): favoritesType {
  const cityNames = new Map;
  offers.filter((offer) => {
    if (offer.isFavorite) {
      if (cityNames.has(offer.city.name)) {
        cityNames.get(offer.city.name).offers.push(offer)
      } else {
        cityNames.set(offer.city.name, {cityName: offer.city.name, offers: [offer]})
      }
    }
  })
  return cityNames;
}

export {getFavorites};

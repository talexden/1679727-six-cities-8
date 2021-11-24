import {OfferType} from '../types/offer-type';

export class Adapter {
  static adaptOfferToClient(offer: any): OfferType {
    const adaptedOffer = Object.assign(
      {},
      offer,
      {
        isFavorite: offer['is_favorite'],
        isPremium: offer['is_premium'],
        maxAdults: offer['max_adults'],
        previewImage: offer['preview_image'],
        host: {
          isPro: offer['host']['is_pro'],
          avatarUrl: offer['host']['avatar_url'],
        },
      },
    );

    delete adaptedOffer['is_favorite'];
    delete adaptedOffer['is_premium'];
    delete adaptedOffer['max_adults'];
    delete adaptedOffer['preview_image'];
    delete adaptedOffer['host']['is_pro'];
    delete adaptedOffer['host']['avatar_url'];


    return adaptedOffer;
  }
}

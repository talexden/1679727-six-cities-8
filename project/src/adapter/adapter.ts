import {OfferType} from "../types/offer-type";

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
      },
    );

    delete adaptedOffer['is_favorite'];
    delete adaptedOffer['is_premium'];
    delete adaptedOffer['max_adults'];
    delete adaptedOffer['preview_image'];


    return adaptedOffer;
  }
}

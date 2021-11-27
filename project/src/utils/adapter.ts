import { CommentType } from '../types/comment-type';
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
          name: offer['host']['name'],
          id: offer['host']['id'],
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

  static adaptCommentToClient(comment: any): CommentType {
    const adaptedcomment = Object.assign(
      {},
      comment,
      {
        user: {
          avatarUrl: comment['user']['avatar_url'],
          isPro: comment['user']['is_pro'],
          name: comment['user']['name'],
          id: comment['user']['id'],
        },
      },
    );

    delete adaptedcomment['user']['avatar_url'];
    delete adaptedcomment['user']['is_pro'];

    return adaptedcomment;
  }

  static adaptAuthToClient(auth: any): any {
    const adaptedcomment = Object.assign(
      {},
      auth,
      {
        avatarUrl: auth['avatar_url'],
        isPro: auth['is_pro'],
      },
    );

    delete adaptedcomment['avatar_url'];
    delete adaptedcomment['is_pro'];

    return adaptedcomment;
  }
}

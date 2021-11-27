import { CommentType } from '../types/comment-type';
import {OfferAdaptedType, OfferType} from '../types/offer-type';

export class Adapter {
  static adaptOfferToClient(offer: OfferAdaptedType): OfferType {
    const {
      'is_favorite': del1,
      'is_premium': del2,
      'max_adults': del3,
      'preview_image': del4,
      ...adaptedOffer
    } = Object.assign(
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

    delete adaptedOffer.host['avatar_url'];
    delete adaptedOffer.host['is_pro'];

    return <OfferType>adaptedOffer;
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

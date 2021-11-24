import {OfferType} from './offer-type';
import {CommentPostType} from './comment-post-type';
import {ReviewType} from './review-type';
import {AuthorizationStatus} from '../const';

export type State = {
  cityName: string,
  cityOffers: OfferType[],
  commentPost: CommentPostType,
  offers: OfferType[],
  offerById: OfferType,
  reviews: ReviewType[],
  authorizationStatus: AuthorizationStatus,
  isOffersLoaded: boolean,
  isOfferLoaded: boolean,
};

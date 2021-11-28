import {OfferType} from './offer-type';
import {CommentPostType} from './comment-post-type';
import {ReviewType} from './review-type';
import {AuthorizationStatus} from '../const';
import {CommentType} from './comment-type';
import {AuthInfoType} from './auth-info-type';

export type State = {
  cityName: string,
  cityOffers: OfferType[],
  sortedCityOffers: OfferType[],
  commentPost: CommentPostType,
  offers: OfferType[],
  offerById: OfferType,
  selectedOffer: OfferType | null,
  favoriteOffers: OfferType[],
  favoriteOffer: OfferType | null,
  editFavorite: OfferType | null,
  comments: CommentType[],
  nearbyOffers: OfferType[],
  reviews: ReviewType[],
  authorizationStatus: AuthorizationStatus,
  isOffersLoaded: boolean,
  isOfferLoaded: boolean,
  authInfo: AuthInfoType,
  isClearCommentForm: boolean,
  isCommentLoading: boolean,
};

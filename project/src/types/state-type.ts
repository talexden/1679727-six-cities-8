import {OfferType} from './offer-type';
import {CommentPostType} from './comment-post-type';
import {CommentType} from './comment-type';
import {AuthorizationStatus} from '../const';
import {AuthInfoType} from './auth-info-type';

export type StateType = {
  cityName: string,
  cityOffers: OfferType[],
  sortedCityOffers: OfferType[],
  commentPost: CommentPostType,
  offers: OfferType[],
  offerById: OfferType,
  selectedOffer: OfferType | null,
  favoriteOffers: OfferType[] | null,
  favoriteOffer: OfferType | null,
  editFavorite: OfferType | null,
  comments: CommentType[],
  nearbyOffers: OfferType[],
  authorizationStatus: AuthorizationStatus,
  isOffersLoaded: boolean,
  isOfferLoaded: boolean,
  authInfo: AuthInfoType,
  isClearCommentForm: boolean,
  isCommentLoading: boolean,
};

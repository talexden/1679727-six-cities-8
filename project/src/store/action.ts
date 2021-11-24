import {ActionType} from '../types/action-type';
import {OfferType} from '../types/offer-type';
import {getCityOffers} from '../filters';
import {CommentPostType} from '../types/comment-post-type';
import {AppRoute, AuthorizationStatus} from '../const';


export const setCity = (city: string, offers: OfferType[]) => ({
  type: ActionType.SetCity,
  payload: {
    cityName: city,
    cityOffers: getCityOffers(city, offers),
  },
} as const);

export const setComment = (commentPost: CommentPostType) => ({
  type: ActionType.SetComment,
  payload: commentPost,
} as const);

export const resetApp = () => ({
  type: ActionType.ResetApp,
} as const);

export const loadOffers = (offers: OfferType[]) => ({
  type: ActionType.LoadOffers,
  payload: {
    offers,
  },
} as const);

export const loadOfferById = (offerById: OfferType) => ({
  type: ActionType.LoadOfferById,
  payload: {
    offerById,
  },
} as const);

export const requireAuthorization = (authStatus: AuthorizationStatus) => ({
  type: ActionType.RequireAuthorization,
  payload: authStatus,
} as const);

export const requireLogout = () => ({
  type: ActionType.RequireLogout,
} as const);

export const redirectToRoute = (url: AppRoute | string) => ({
  type: ActionType.RedirectToRoute,
  payload: url,
} as const);

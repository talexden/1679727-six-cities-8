import {ActionType} from '../types/action-type';
import {OfferType} from '../types/offer-type';
import {getCityOffers} from '../utils/filters';
import {CommentPostType} from '../types/comment-post-type';
import {AppRoute, AuthorizationStatus} from '../const';
import {CommentType} from '../types/comment-type';
import {AuthInfoType} from '../types/auth-info-type';


export const setCity = (cityName: string) => ({
  type: ActionType.SetCity,
  payload: cityName,
} as const);

export const setCityOffers = (cityName: string, offers: OfferType[]) => ({
  type: ActionType.SetCityOffers,
  payload: {
    cityOffers: getCityOffers(cityName, offers),
  },
} as const);

export const setComment = (commentPost: CommentPostType) => ({
  type: ActionType.SetComment,
  payload: commentPost,
} as const);

export const setSelectedOffer = (selectedOffer: OfferType | null) => ({
  type: ActionType.SetSelectedOffer,
  payload: {
    selectedOffer,
  },
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

export const loadCommentsByOfferAction = (comments: CommentType[]) => ({
  type: ActionType.LoadCommentsByOfferAction,
  payload: {
    comments,
  },
} as const);

export const loadNearbyOffers = (nearbyOffers: OfferType[]) => ({
  type: ActionType.LoadNearbyOffers,
  payload: {
    nearbyOffers,
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

export const sortCityOffers = (sortedCityOffers: OfferType[]) => ({
  type: ActionType.SortCityOffers,
  payload: {
    sortedCityOffers,
  },
} as const);

export const loadUserInfo = (authInfo: AuthInfoType) => ({
  type: ActionType.LoadUserInfo,
  payload: {
    authInfo,
  },
} as const);

export const setFavorite = (editFavorite: OfferType | null) => ({
  type: ActionType.SetFavorite,
  payload: editFavorite,
} as const);

export const loadFavorites = (favoriteOffers: OfferType[]) => ({
  type: ActionType.LoadFavorites,
  payload: {
    favoriteOffers,
  },
} as const);

export const loadFavoriteOffer = (favoriteOffer: OfferType) => ({
  type: ActionType.LoadFavoriteOffer,
  payload: {
    favoriteOffer,
  },
} as const);

export const replaceOffer = (favoriteOffer: OfferType | null) => ({
  type: ActionType.ReplaceOffer,
  payload: {
    favoriteOffer,
  },
} as const);

export const clearCommentForm = () => ({
  type: ActionType.ClearCommentForm,
} as const);

export const postOfferCommentRequest = () => ({
  type: ActionType.PostOfferCommentRequest,
} as const);

export const postOfferCommentSuccess = (comments: CommentType[]) => ({
  type: ActionType.PostOfferCommentSuccess,
  payload: {
    comments,
  },
} as const);

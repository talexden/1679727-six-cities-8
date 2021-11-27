import {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {AxiosInstance} from 'axios';
import {State} from './state-type';
import {
  loadOffers,
  loadOfferById,
  setSelectedOffer,
  setCity,
  setCityOffers,
  setComment,
  requireAuthorization,
  requireLogout,
  redirectToRoute,
  sortCityOffers,
  loadNearbyOffers,
  loadCommentsByOfferAction,
  loadUserInfo,
  setFavorite,
  loadFavorites, loadFavoriteOffer, replaceOffer
} from '../store/action';


export enum ActionType {
  RedirectToRoute = 'route/redirectToRoute',
  RequireAuthorization = 'user/requireAuthorization',
  RequireLogout = 'user/requireLogout',
  SetCity = 'util/setCity',
  SetCityOffers = 'util/setCityOffers',
  SetSelectedOffer = 'util/setSelectedOffer',
  SortCityOffers = 'util/sortCityOffer',
  ReplaceOffer = 'util/replaceOffer',
  LoadOffers = 'data/loadOffers',
  LoadOfferById = 'data/loadOffer',
  LoadNearbyOffers = 'data/loadNearbyOffers',
  LoadCommentsByOfferAction = 'data/commentsByOffer',
  LoadUserInfo = 'data/loadUserInfo',
  SetFavorite = 'data/setFavorite',
  LoadFavorites = 'data/loadFavorites',
  LoadFavoriteOffer = 'data/loadFavoriteOffer',
  SetComment = 'data/setReview',
}


export type Actions =
  | ReturnType<typeof setCity>
  | ReturnType<typeof setCityOffers>
  | ReturnType<typeof setComment>
  | ReturnType<typeof setSelectedOffer>
  | ReturnType<typeof setFavorite>
  | ReturnType<typeof loadFavoriteOffer>
  | ReturnType<typeof replaceOffer>
  | ReturnType<typeof loadFavorites>
  | ReturnType<typeof loadOffers>
  | ReturnType<typeof loadOfferById>
  | ReturnType<typeof loadNearbyOffers>
  | ReturnType<typeof loadCommentsByOfferAction>
  | ReturnType<typeof requireAuthorization>
  | ReturnType<typeof requireLogout>
  | ReturnType<typeof sortCityOffers>
  | ReturnType<typeof loadUserInfo>
  | ReturnType<typeof redirectToRoute>;

export type ThunkActionResult<R = Promise<void>> = ThunkAction<R, State, AxiosInstance, Actions>;

export type ThunkAppDispatch = ThunkDispatch<State, AxiosInstance, Actions>;


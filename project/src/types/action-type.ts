import {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {AxiosInstance} from 'axios';
import {StateType} from './state-type';
import {Action} from 'redux';

export enum ActionType {
  RedirectToRoute = 'route/redirectToRoute',
  RequireAuthorization = 'user/requireAuthorization',
  RequireLogout = 'user/requireLogout',
  SetCity = 'util/setCity',
  SetCityOffers = 'util/setCityOffers',
  SetSelectedOffer = 'util/setSelectedOffer',
  SortCityOffers = 'util/sortCityOffer',
  ReplaceOffer = 'util/replaceOffer',
  ClearCommentForm = 'util/clearCommentForm',
  LoadOffers = 'data/loadOffers',
  LoadOfferById = 'data/loadOffer',
  LoadNearbyOffers = 'data/loadNearbyOffers',
  LoadCommentsByOfferAction = 'data/commentsByOffer',
  LoadUserInfo = 'data/loadUserInfo',
  SetFavorite = 'data/setFavorite',
  LoadFavorites = 'data/loadFavorites',
  LoadFavoriteOffer = 'data/loadFavoriteOffer',
  SetComment = 'data/setReview',
  PostOfferCommentRequest = 'app/postOfferCommentRequest',
  PostOfferCommentSuccess = 'app/postOfferCommentSuccess',
}

export type ThunkActionResult<R = Promise<void>> = ThunkAction<R, StateType, AxiosInstance, Action>;

export type ThunkAppDispatch = ThunkDispatch<StateType, AxiosInstance, Action>;


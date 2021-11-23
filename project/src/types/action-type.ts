import {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {AxiosInstance} from 'axios';
import {State} from './state-type';
import {
  loadOffers,
  resetApp,
  setCity,
  setComment,
  requireAuthorization,
  requireLogout, redirectToRoute,
} from "../store/action";


export enum ActionType {
  SetCity = '/setCity',
  SetComment = '/setReview',
  ResetApp = '/reset',
  LoadOffers = 'data/loadOffers',
  RequireAuthorization = 'user/requireAuthorization',
  RequireLogout = 'user/requireLogout',
  RedirectToRoute = '/redirectToRoute'
}


export type Actions =
  | ReturnType<typeof setCity>
  | ReturnType<typeof setComment>
  | ReturnType<typeof resetApp>
  | ReturnType<typeof loadOffers>
  | ReturnType<typeof requireAuthorization>
  | ReturnType<typeof requireLogout>
  | ReturnType<typeof redirectToRoute>;

export type ThunkActionResult<R = Promise<void>> = ThunkAction<R, State, AxiosInstance, Actions>;

export type ThunkAppDispatch = ThunkDispatch<State, AxiosInstance, Actions>;


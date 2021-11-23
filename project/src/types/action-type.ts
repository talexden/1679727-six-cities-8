import {
  loadOffers,
  resetApp,
  setCity,
  setComment,
  requireAuthorization,
  requireLogout,
} from "../store/action";

export enum ActionType {
  SetCity = '/setCity',
  SetComment = '/setReview',
  ResetApp = '/reset',
  LoadOffers = 'data/loadOffers',
  RequireAuthorization = 'user/requireAuthorization',
  RequireLogout = 'user/requireLogout',
}


export type Actions =
  | ReturnType<typeof setCity>
  | ReturnType<typeof setComment>
  | ReturnType<typeof resetApp>
  | ReturnType<typeof loadOffers>
  | ReturnType<typeof requireAuthorization>
  | ReturnType<typeof requireLogout>;

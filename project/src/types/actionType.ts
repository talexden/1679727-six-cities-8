import {CommentPostType} from './commentPostType';
import { OfferType } from './offerType';

export enum ActionType {
  SetCity = '/setCity',
  SetComment = '/setReview',
  ResetApp = '/reset',
}

export type SetCityAction = {
  type: ActionType.SetCity;
  payload: {
    cityName: string;
    cityOffers: OfferType[],
  };
};

export type SetCommentAction = {
  type: ActionType.SetComment;
  payload: CommentPostType;
};

export type ResetAppAction = {
  type: ActionType.ResetApp;
};

export type Actions = SetCityAction | SetCommentAction | ResetAppAction;

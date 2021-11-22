import {ActionType, GetCityOffersAction, ResetAppAction, SetCityAction, SetCommentAction} from '../types/actionType';
import {OfferType} from '../types/offerType';
import {getCityOffers} from '../filters';
import {CommentPostType} from "../types/commentPostType";


export const SetCity = (city: string, offers: OfferType[]): SetCityAction => ({
  type: ActionType.SetCity,
  payload: {
    cityName: city,
    cityOffers: getCityOffers(city, offers),
  }
});

export const GetCityOffers = (city: string, offers: OfferType[]): GetCityOffersAction => ({
  type: ActionType.GetCityOffers,
  payload: getCityOffers(city, offers),
});



export const SetComment = (commentPost: CommentPostType): SetCommentAction => ({
  type: ActionType.SetComment,
  payload: commentPost,
});

export const ResetApp = (): ResetAppAction => ({
  type: ActionType.ResetApp,
});

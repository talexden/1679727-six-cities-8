import {OfferType} from "./offerType";
import {CommentPostType} from "./commentPostType";
import {ReviewType} from "./reviewType";
import {AuthorizationStatus} from "../const";

export type State = {
  cityName: string,
  cityOffers: OfferType[],
  commentPost: CommentPostType,
  offers: OfferType[],
  reviews: ReviewType[],
  authorizationStatus: AuthorizationStatus,
};

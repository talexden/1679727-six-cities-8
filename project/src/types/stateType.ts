import {OfferType} from "./offerType";
import {CommentPostType} from "./commentPostType";

export type State = {
  cityName: string,
  cityOffers: OfferType[],
  commentPost: CommentPostType,
};

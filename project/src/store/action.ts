import {ActionType} from '../types/action-type';
import {OfferType} from '../types/offer-type';
import {CommentPostType} from '../types/comment-post-type';
import {AppRoute, AuthorizationStatus} from '../const';
import {CommentType} from '../types/comment-type';
import {AuthInfoType} from '../types/auth-info-type';
import {createAction} from '@reduxjs/toolkit';

export const redirectToRoute = createAction(
  ActionType.RedirectToRoute,
  (url: AppRoute | string) => ({
    payload: url,
  }),
);

export const setCity = createAction(
  ActionType.SetCity,
  (cityName: string) => ({
    payload: cityName,
  }),
);

export const setCityOffers = createAction(
  ActionType.SetCityOffers,
  (cityOffers: OfferType[]) => ({
    payload: {
      cityOffers,
    },
  }),
);

export const setComment = createAction(
  ActionType.SetComment,
  (commentPost: CommentPostType) => ({
    payload: commentPost,
  }),
);

export const setSelectedOffer = createAction(
  ActionType.SetSelectedOffer,
  (selectedOffer: OfferType | null) => ({
    payload: {
      selectedOffer,
    },
  }),
);

export const loadOffers = createAction(
  ActionType.LoadOffers,
  (offers: OfferType[]) => ({
    payload: {
      offers,
    },
  }),
);

export const loadOfferById = createAction(
  ActionType.LoadOfferById,
  (offerById: OfferType) => ({
    payload: {
      offerById,
    },
  }),
);

export const loadCommentsByOfferAction = createAction(
  ActionType.LoadCommentsByOfferAction,
  (comments: CommentType[]) => ({
    payload: {
      comments,
    },
  }),
);

export const loadNearbyOffers = createAction(
  ActionType.LoadNearbyOffers,
  (nearbyOffers: OfferType[]) => ({
    payload: {
      nearbyOffers,
    },
  }),
);

export const requireAuthorization = createAction(
  ActionType.RequireAuthorization,
  (authStatus: AuthorizationStatus) => ({
    payload: authStatus,
  }),
);

export const requireLogout = createAction(ActionType.RequireLogout);

export const sortCityOffers = createAction(
  ActionType.SortCityOffers,
  (sortedCityOffers: OfferType[]) => ({
    payload: {
      sortedCityOffers,
    },
  }),
);

export const loadUserInfo = createAction(
  ActionType.LoadUserInfo,
  (authInfo: AuthInfoType) => ({
    payload: {
      authInfo,
    },
  }),
);

export const setFavorite = createAction(
  ActionType.SetFavorite,
  (editFavorite: OfferType | null) => ({
    payload: editFavorite,
  }),
);

export const loadFavorites = createAction(
  ActionType.LoadFavorites,
  (favoriteOffers: OfferType[]) => ({
    payload: {
      favoriteOffers,
    },
  }),
);

export const loadFavoriteOffer = createAction(
  ActionType.LoadFavoriteOffer,
  (favoriteOffer: OfferType) => ({
    payload: {
      favoriteOffer,
    },
  }),
);

export const replaceOffer = createAction(
  ActionType.ReplaceOffer,
  (favoriteOffer: OfferType | null) => ({
    payload: {
      favoriteOffer,
    },
  }),
);

export const clearCommentForm = createAction(ActionType.ClearCommentForm);

export const postOfferCommentRequest = createAction(ActionType.PostOfferCommentRequest);

export const postOfferCommentSuccess = createAction(
  ActionType.PostOfferCommentSuccess,
  (comments: CommentType[]) => ({
    payload: {
      comments,
    },
  }),
);

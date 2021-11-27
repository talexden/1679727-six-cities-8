import {ThunkActionResult} from '../types/action-type';
import {
  loadCommentsByOfferAction, loadFavoriteOffer,
  loadFavorites,
  loadNearbyOffers,
  loadOfferById,
  loadOffers, loadUserInfo,
  redirectToRoute, replaceOffer,
  requireAuthorization,
  requireLogout,
  setCity
} from './action';
import {saveToken, dropToken} from '../services/token';
import {APIRoute, AppRoute, AuthorizationStatus, START_CITY} from '../const';
import {OfferType} from '../types/offer-type';
import {AuthDataType} from '../types/auth-data-type';
import {Adapter} from '../utils/adapter';
import { CommentType } from '../types/comment-type';
import {AuthInfoType} from '../types/auth-info-type';

export const fetchOffersAction = (): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const {data} = await api.get<OfferType[]>(APIRoute.Offers);
    const offers = data.map(Adapter.adaptOfferToClient);
    dispatch(loadOffers(offers));
    dispatch(setCity(START_CITY));
  };

export const fetchFavoritesAction = (): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const {data} = await api.get<OfferType[]>(APIRoute.Favorite);
    const favorites = data.map(Adapter.adaptOfferToClient);
    dispatch(loadFavorites(favorites));
  };

export const postFavoriteAction = (offerId: number, status:number): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    const {data} = await api.post<AuthInfoType>(`${APIRoute.Favorite}/${offerId}/${status}`);
    const favoriteOffer = Adapter.adaptOfferToClient(data);
    dispatch(loadFavoriteOffer(favoriteOffer));
    dispatch(replaceOffer(favoriteOffer));
  };

export const fetchOfferByIdAction = (offerId: number): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const {data} = await api.get<OfferType>(`${APIRoute.Offers}/${offerId}`);
    const offer = Adapter.adaptOfferToClient(data);
    dispatch(loadOfferById(offer));
  };

export const fetchCommentsByOfferAction = (offerId: number): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const {data} = await api.get<CommentType[]>(`${APIRoute.Comments}/${offerId}`);
    const comments = data.map(Adapter.adaptCommentToClient);
    dispatch(loadCommentsByOfferAction(comments));
  };

export const fetchNearbyOffersAction = (offerId: number): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const {data} = await api.get<OfferType[]>(`${APIRoute.Offers}/${offerId}/nearby`);
    const nearbyOffers = data.map(Adapter.adaptOfferToClient);
    dispatch(loadNearbyOffers(nearbyOffers));
  };

export const checkAuthAction = (): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    await api.get<AuthInfoType>(APIRoute.Login)
      .then((data) => {
        dispatch(requireAuthorization(AuthorizationStatus.Auth));
        const authInfo = Adapter.adaptAuthToClient(data.data);
        dispatch(loadUserInfo(authInfo));
      });
  };

export const loginAction = ({login: email, password}: AuthDataType): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    const {data} = await api.post<AuthInfoType>(APIRoute.Login, {email, password});
    const authInfo = Adapter.adaptAuthToClient(data);
    saveToken(authInfo.token);
    dispatch(loadUserInfo(authInfo));
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
    dispatch(redirectToRoute(AppRoute.Main));
  };

export const logoutAction = (): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    api.delete(APIRoute.Logout);
    dropToken();
    dispatch(requireLogout());
    dispatch(redirectToRoute(AppRoute.SignIn));
  };


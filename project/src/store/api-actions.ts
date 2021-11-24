import {ThunkActionResult} from '../types/action-type';
import {loadOfferById, loadOffers, redirectToRoute, requireAuthorization, requireLogout, setCity} from './action';
import {saveToken, dropToken, Token} from '../services/token';
import {APIRoute, AppRoute, AuthorizationStatus, START_CITY} from '../const';
import {OfferType} from '../types/offer-type';
import {AuthDataType} from '../types/auth-data-type';
import {Adapter} from '../adapter/adapter';


export const fetchOffersAction = (): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const {data} = await api.get<OfferType[]>(APIRoute.Offers);
    const offers = data.map(Adapter.adaptOfferToClient);
    dispatch(loadOffers(offers));
    dispatch(setCity(START_CITY, offers));
  };

export const fetchOfferByIdAction = (offerId: number): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const {data} = await api.get<OfferType>(`${APIRoute.Offers}/${offerId}`);
    const offer = Adapter.adaptOfferToClient(data);
    dispatch(loadOfferById(offer));
  };



export const checkAuthAction = (): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    await api.get(APIRoute.Login)
      .then(() => {
        dispatch(requireAuthorization(AuthorizationStatus.Auth));
      });
  };

export const loginAction = ({login: email, password}: AuthDataType): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    const {data: {token}} = await api.post<{token: Token}>(APIRoute.Login, {email, password});
    saveToken(token);
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

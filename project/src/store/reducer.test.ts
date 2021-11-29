import {reducer} from './reducer';
import {AuthorizationStatus, INITIAL_OFFER} from '../const';
import {
  clearCommentForm,
  loadCommentsByOfferAction,
  loadFavoriteOffer,
  loadFavorites,
  loadNearbyOffers,
  loadOfferById,
  loadOffers,
  loadUserInfo,
  postOfferCommentRequest,
  postOfferCommentSuccess,
  replaceOffer,
  requireAuthorization,
  requireLogout,
  setCity,
  setCityOffers,
  setComment,
  setFavorite,
  setSelectedOffer,
  sortCityOffers
} from './action';
import {StateType} from '../types/state-type';
import {mockAuthInfo, mockComment, mockCommentPost, mockFavoriteOffer, mockOffer} from '../utils/mock';

describe('Reducer', () => {
  let state: StateType;
  beforeEach(() => {
    state = {
      cityName: 'Paris',
      cityOffers: [],
      sortedCityOffers: [],
      commentPost: {
        comment: '',
        rating: '',
      },
      offers: [],
      offerById: INITIAL_OFFER,
      selectedOffer: null,
      editFavorite: null,
      favoriteOffers: [],
      favoriteOffer: null,
      nearbyOffers: [],
      comments: [],
      isOffersLoaded: false,
      isOfferLoaded: false,
      authorizationStatus: AuthorizationStatus.Unknown,
      authInfo: {
        avatarUrl: '',
        email: '',
        id: 0,
        isPro: false,
        name: '',
        token: '',
      },
      isClearCommentForm: false,
      isCommentLoading: false,
    };
  });

  it('without additional parameters should return initial state', () => {
    expect(reducer(void 0, {type: 'UNKNOWN_ACTION '}))
      .toEqual(state);
  });

  it('setCity: should update cityName by city filter', () => {
    expect(reducer(state, setCity('New York')))
      .toEqual({...state, cityName: 'New York'});
  });

  it('Offers: should update cityOffers by selected city', () => {
    expect(reducer(state, setCityOffers([mockOffer])))
      .toEqual({...state, cityOffers: [mockOffer]});
  });

  it('Comments: should update commentPost', () => {
    expect(reducer(state, setComment(mockCommentPost)))
      .toEqual({...state, commentPost: mockCommentPost});
  });

  it('Offers: should update selectedOffer by click', () => {
    expect(reducer(state, setSelectedOffer(mockOffer)))
      .toEqual({...state, selectedOffer: mockOffer});
  });

  it('Offers: should update offers', () => {
    expect(reducer(state, loadOffers([mockOffer])))
      .toEqual({...state, offers: [mockOffer]});
  });

  it('Offers: should update offerById by offer id', () => {
    expect(reducer(state, loadOfferById(mockOffer)))
      .toEqual({...state, offerById: mockOffer});
  });

  it('Comments: should update comments by offer id', () => {
    expect(reducer(state, loadCommentsByOfferAction([mockComment])))
      .toEqual({...state, comments: [mockComment]});
  });

  it('Offers: should update nearby offers by offer id', () => {
    expect(reducer(state, loadNearbyOffers([mockOffer])))
      .toEqual({...state, nearbyOffers: [mockOffer]});
  });

  it('Auth: should update isOffersLoaded & authorizationStatus AUTH', () => {
    expect(reducer(state, requireAuthorization(AuthorizationStatus.Auth)))
      .toEqual({...state, authorizationStatus: 'AUTH', isOffersLoaded: true});
  });

  it('Auth: should update isOffersLoaded & authorizationStatus NO_AUTH', () => {
    expect(reducer(state, requireAuthorization(AuthorizationStatus.NoAuth)))
      .toEqual({...state, authorizationStatus: 'NO_AUTH', isOffersLoaded: true});
  });

  it('Auth: should update authorizationStatus authorizationStatus NO_AUTH by logout', () => {
    expect(reducer(state, requireLogout()))
      .toEqual({...state, authorizationStatus: 'NO_AUTH'});
  });

  it('Auth: should update loadUserInfo', () => {
    expect(reducer(state, loadUserInfo(mockAuthInfo)))
      .toEqual({...state, authInfo: mockAuthInfo});
  });

  it('Offers: should update sortedCityOffers', () => {
    expect(reducer(state, sortCityOffers([mockOffer])))
      .toEqual({...state, sortedCityOffers: [mockOffer]});
  });

  it('Favorite: should update editFavorite by offer', () => {
    expect(reducer(state, setFavorite(mockFavoriteOffer)))
      .toEqual({...state, editFavorite: mockFavoriteOffer});
  });

  it('Favorite: should update favoriteOffers', () => {
    expect(reducer(state, loadFavorites([mockFavoriteOffer])))
      .toEqual({...state, favoriteOffers: [mockFavoriteOffer]});
  });

  it('Favorite: should update favoriteOffers by null', () => {
    expect(reducer(state, loadFavorites(null)))
      .toEqual({...state, favoriteOffers: null});
  });

  it('Favorite: should update favoriteOffer', () => {
    expect(reducer(state, loadFavoriteOffer(mockFavoriteOffer)))
      .toEqual({...state, favoriteOffer: mockFavoriteOffer});
  });

  it('Favorite: should update favoriteOffer by null', () => {
    expect(reducer(state, loadFavoriteOffer(null)))
      .toEqual({...state, favoriteOffer: null});
  });

  it('Favorite: should update Offers by favoriteOffer', () => {
    const notFavoriteOffer = {...mockFavoriteOffer, isFavorite: false};
    const testState = {...state, offers:  [notFavoriteOffer]};
    expect(reducer(testState, replaceOffer(mockFavoriteOffer)))
      .toEqual({...state, offers: [mockFavoriteOffer]});
  });

  it('Favorite: should update offerById by favoriteOffer', () => {
    const notFavoriteOffer = {...mockFavoriteOffer, isFavorite: false};
    const testState = {...state, offerById:  notFavoriteOffer};
    expect(reducer(testState, replaceOffer(mockFavoriteOffer)))
      .toEqual({...state, offerById: mockFavoriteOffer});
  });

  it('Favorite: should no update offerById & offers by favoriteOffer', () => {
    expect(reducer(state, replaceOffer(mockFavoriteOffer)))
      .toEqual({...state, offerById: INITIAL_OFFER, offers: []});
  });

  it('Favorite: should update isClearCommentForm: false by clearCommentForm', () => {
    expect(reducer(state, clearCommentForm()))
      .toEqual({...state, isClearCommentForm: false});
  });

  it('Favorite: should update isCommentLoading: true by postOfferCommentRequest', () => {
    expect(reducer(state, postOfferCommentRequest()))
      .toEqual({...state, isCommentLoading: true});
  });

  it('Favorite: should update comments by postOfferCommentSuccess', () => {
    expect(reducer(state, postOfferCommentSuccess([mockComment])))
      .toEqual({
        ...state,
        comments: [mockComment],
        isCommentLoading: false,
        isClearCommentForm: true,
      });
  });
});

import {reducer} from './reducer';
import {AuthorizationStatus, INITIAL_OFFER} from '../const';
import {setCity} from './action';
import {StateType} from '../types/state-type';

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
      reviews: [],
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

  it('setCity: should update name of selected city', () => {
    expect(reducer(void 0, setCity('New York')))
      .toEqual({...state, cityName: 'New York'});
  });

  it('setCity: should update name of selected city', () => {
    expect(reducer(void 0, setCity('New York')))
      .toEqual({...state, cityName: 'New York'});
  });

});

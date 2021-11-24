import {State} from '../types/state-type';
import {Actions, ActionType} from '../types/action-type';
import {AuthorizationStatus, INIT_OFFER_BY_ID} from '../const';


const initialState = {
  cityName: '',
  cityOffers: [],
  commentPost: {
    comment: '',
    rating: 0,
  },
  offers: [],
  offerById: INIT_OFFER_BY_ID,
  isOffersLoaded: false,
  isOfferLoaded: false,
  reviews: [],
  authorizationStatus: AuthorizationStatus.Unknown,
};

const reducer = (state: State = initialState, action: Actions): State => {
  switch (action.type) {
    case ActionType.SetCity:
      return {...state, cityName: action.payload.cityName, cityOffers: action.payload.cityOffers};
    case ActionType.SetComment:
      return {...state, commentPost: action.payload};
    case ActionType.ResetApp:
      return {...initialState};
    case ActionType.LoadOffers: {
      const {offers} = action.payload;
      return {...state, offers};
    }
    case ActionType.LoadOfferById: {
      const {offerById} = action.payload;
      return {...state, offerById: offerById};
    }
    case ActionType.RequireAuthorization:
      return {...state, authorizationStatus: action.payload, isOffersLoaded: true};
    case ActionType.RequireLogout:
      return {...state, authorizationStatus: AuthorizationStatus.NoAuth};
    default:
      return state;
  }
};

export {reducer};

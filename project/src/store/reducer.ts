import {State} from '../types/state-type';
import {Actions, ActionType} from '../types/action-type';
import {AuthorizationStatus} from '../const';

const initialState = {
  cityName: 'Paris',
  cityOffers: [],
  commentPost: {
    comment: '',
    rating: 0,
  },
  offers: [],
  reviews: [],
  authorizationStatus: AuthorizationStatus.Unknown,
  isDataLoaded: false,
};

const reducer = (state: State = initialState, action: Actions): State => {
  switch (action.type) {
    case ActionType.SetCity:
      return {...state, cityName: action.payload.cityName, cityOffers: action.payload.cityOffers};
    case ActionType.SetComment:
      return {...state, commentPost: action.payload};
    case ActionType.ResetApp:
      return {...initialState};
    case ActionType.LoadOffers:
      const {offers} = action.payload;
      return {...state, offers};
    case ActionType.RequireAuthorization:
      return {...state, authorizationStatus: action.payload, isDataLoaded: true};
    case ActionType.RequireLogout:
      return {...state, authorizationStatus: AuthorizationStatus.NoAuth};
    default:
      return state;
  }
};

export {reducer};

import {State} from '../types/stateType';
import {Actions, ActionType} from '../types/actionType';
import {AMSTERDAM_OFFERS} from "../const";

const initialState = {
  cityName: 'Amsterdam',
  cityOffers: AMSTERDAM_OFFERS,
  commentPost: {
    comment: "A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.",
    rating: 4,
  },
};

const reducer = (state: State = initialState, action: Actions): State => {
  switch (action.type) {
    case ActionType.SetCity:
      return {...state, cityName: action.payload.cityName, cityOffers: action.payload.cityOffers};
    case ActionType.SetComment:
      return {...state, commentPost: action.payload};
    case ActionType.ResetApp:
      return {...initialState};
    default:
      return state;
  }
};

export {reducer};

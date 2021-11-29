import {State} from '../types/state-type';
import {Actions, ActionType} from '../types/action-type';
import {AuthorizationStatus, initialState} from '../const';


const reducer = (state: State = initialState, action: Actions): State => {
  switch (action.type) {

    case ActionType.SetCity: {
      return {...state, cityName: action.payload};
    }
    case ActionType.SetCityOffers: {
      const {cityOffers} = action.payload;
      return {...state, cityOffers, sortedCityOffers: [...cityOffers]};
    }
    case ActionType.SetComment: {
      return {...state, commentPost: action.payload};
    }
    case ActionType.SetSelectedOffer:{
      const {selectedOffer} = action.payload;
      return {...state, selectedOffer};
    }
    case ActionType.SetFavorite:{
      return {...state, editFavorite: action.payload};
    }
    case ActionType.LoadFavorites:{
      const {favoriteOffers} = action.payload;
      return {...state, favoriteOffers};
    }
    case ActionType.LoadFavoriteOffer:{
      const {favoriteOffer} = action.payload;
      return {...state, favoriteOffer};
    }
    case ActionType.LoadOffers: {
      const {offers} = action.payload;
      return {...state, offers};
    }
    case ActionType.LoadOfferById: {
      const {offerById} = action.payload;
      return {...state, offerById};
    }
    case ActionType.LoadCommentsByOfferAction: {
      const {comments} = action.payload;
      return {...state, comments};
    }
    case ActionType.LoadNearbyOffers: {
      const {nearbyOffers} = action.payload;
      return {...state, nearbyOffers};
    }
    case ActionType.LoadUserInfo: {
      const {authInfo} = action.payload;
      return {...state, authInfo};
    }
    case ActionType.RequireAuthorization: {
      return {...state, authorizationStatus: action.payload, isOffersLoaded: true};
    }
    case ActionType.RequireLogout: {
      return {...state, authorizationStatus: AuthorizationStatus.NoAuth};
    }
    case ActionType.SortCityOffers:{
      const {sortedCityOffers} = action.payload;
      return {...state, sortedCityOffers};
    }
    case ActionType.ReplaceOffer:{
      const {favoriteOffer} = action.payload;
      let offers = state.offers;
      if (favoriteOffer !== null) {
        const offerIndex = offers
          .findIndex((offer) => offer.id === favoriteOffer.id);
        if (offerIndex !== -1) {
          offers = [...state.offers.slice(0, offerIndex), favoriteOffer, ...state.offers.slice(offerIndex+1)];
        }
      }

      let offerById = state.offerById;
      if (favoriteOffer !== null && offerById.id === favoriteOffer.id){
        offerById = favoriteOffer;
      }
      return {...state, offers, offerById};
    }
    default:
      return state;
  }
};

export {reducer};

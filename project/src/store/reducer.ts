import {AuthorizationStatus, initialState} from '../const';
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
  setSelectedOffer, sortCityOffers
} from './action';
import {createReducer} from '@reduxjs/toolkit';


const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setCity, (state, action) => {
      state.cityName = action.payload;
    })
    .addCase(setCityOffers, (state, action) => {
      const {cityOffers} = action.payload;
      state.cityOffers = cityOffers;
    })
    .addCase(setComment, (state, action) => {
      const {commentPost} = action.payload;
      state.commentPost = commentPost;
    })
    .addCase(setSelectedOffer, (state, action) => {
      const {selectedOffer} = action.payload;
      state.selectedOffer = selectedOffer;
    })
    .addCase(loadOffers, (state, action) => {
      const {offers} = action.payload;
      state.offers = offers;
    })
    .addCase(loadOfferById, (state, action) => {
      const {offerById} = action.payload;
      state.offerById = offerById;
    })
    .addCase(loadCommentsByOfferAction, (state, action) => {
      const {comments} = action.payload;
      state.comments = comments;
    })
    .addCase(loadNearbyOffers, (state, action) => {
      const {nearbyOffers} = action.payload;
      state.nearbyOffers = nearbyOffers;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
      state.isOffersLoaded = true;
    })
    .addCase(requireLogout, (state) => {
      state.authorizationStatus = AuthorizationStatus.NoAuth;
    })
    .addCase(loadUserInfo, (state, action) => {
      const {authInfo} = action.payload;
      state.authInfo = authInfo;
    })
    .addCase(sortCityOffers, (state, action) => {
      const {sortedCityOffers} = action.payload;
      state.sortedCityOffers = sortedCityOffers;
    })
    .addCase(setFavorite, (state, action) => {
      const {editFavorite} = action.payload;
      state.editFavorite = editFavorite;
    })
    .addCase(loadFavorites, (state, action) => {
      const {favoriteOffers} = action.payload;
      state.favoriteOffers = favoriteOffers;
    })
    .addCase(loadFavoriteOffer, (state, action) => {
      const {favoriteOffer} = action.payload;
      state.favoriteOffer = favoriteOffer;
    })
    .addCase(replaceOffer, (state, action) => {
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
      state.offers = offers;
      state.offerById = offerById;
    })
    .addCase(clearCommentForm, (state) => {
      state.isClearCommentForm = false;
    })
    .addCase(postOfferCommentRequest, (state) => {
      state.isCommentLoading = true;
    })
    .addCase(postOfferCommentSuccess, (state, action) => {
      const {comments} = action.payload;
      state.comments = comments;
      state.isCommentLoading = false;
      state.isClearCommentForm = true;
    });
});

export {reducer};

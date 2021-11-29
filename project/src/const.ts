export const START_CITY = 'Paris';
export const MAX_NEAR_OFFERS = 3;
export const MAX_PROPERTY_IMAGE = 6;
export const COMMENT_LIST_SIZE = 10;
export const CITIES = ['Paris','Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'];
export const SORT_ITEMS = ['Popular', 'Price: low to high', 'Price: high to low', 'Top rated first'];
export const MAP_TAILE_LAYER = 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png';
export const MAP_TAILE_LAYER_ATTRIBUTIONS = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>';


export enum AppRoute {
  Main = '/',
  SignIn = '/login',
  Favorites = '/favorites',
  Offer  = '/offer',
  Room = '/offer/:id',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}


export enum APIRoute {
  Offers = '/hotels',
  Login = '/login',
  Logout = '/logout',
  Comments = '/comments',
  Favorite = '/favorite'
}

export const INITIAL_OFFER = {
  city: {
    location: {
      latitude: 0,
      longitude: 0,
      zoom: 0,
    },
    name: '',
  },
  location: {
    latitude: 0,
    longitude: 0,
    zoom: 0,
  },
  host: {
    avatarUrl: '',
    id: 0,
    isPro: false,
    name: '',
  },
  id: 0,
  bedrooms: 0,
  description: '',
  goods: [],
  images: [],
  isFavorite: false,
  isPremium: false,
  maxAdults: 0,
  previewImage: '',
  price: 0,
  rating: 0,
  title: '',
  type: '',
};

export const initialState = {
  cityName: '',
  cityOffers: [],
  sortedCityOffers: [],
  commentPost: {
    comment: '',
    rating: 0,
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
};

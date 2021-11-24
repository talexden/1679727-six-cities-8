export const START_CITY = 'Paris';
export const MAX_NEAR_OFFERS = 3;
export const CITIES = ['Paris','Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'];

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

}


export const INIT_OFFER_BY_ID = {
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

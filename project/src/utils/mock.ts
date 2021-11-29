import {OfferType} from '../types/offer-type';
import {AuthInfoType} from '../types/auth-info-type';
import {CommentType} from '../types/comment-type';

export const mockFavoriteOffer: OfferType = {
  description: 'Discover daily local life in city center, friendly neighborhood, clandestine casino, karaoke, old-style artisans, art gallery and artist studio downstairs.',
  goods: ['Air conditioning', 'Breakfast', 'Washer', 'Towels', 'Baby seat', 'Laptop friendly workspace'],
  host: {
    id: 25,
    name: 'Angelina',
    isPro: true,
    avatarUrl: 'img/avatar-angelina.jpg',
  },
  id: 11,
  images: ['https://8.react.pages.academy/static/hotel/13.jpg', 'https://8.react.pages.academy/static/hotel/17.jpg', 'https://8.react.pages.academy/static/hotel/5.jpg', 'https://8.react.pages.academy/static/hotel/16.jpg', 'https://8.react.pages.academy/static/hotel/1.jpg', 'https://8.react.pages.academy/static/hotel/3.jpg', 'https://8.react.pages.academy/static/hotel/6.jpg', 'https://8.react.pages.academy/static/hotel/18.jpg', 'https://8.react.pages.academy/static/hotel/20.jpg', 'https://8.react.pages.academy/static/hotel/8.jpg', 'https://8.react.pages.academy/static/hotel/15.jpg', 'https://8.react.pages.academy/static/hotel/9.jpg', 'https://8.react.pages.academy/static/hotel/2.jpg', 'https://8.react.pages.academy/static/hotel/4.jpg'],
  isFavorite : true,
  isPremium: false,
  location: {
    latitude: 48.843610000000005,
    longitude: 2.338499,
    zoom: 16,
  },
  maxAdults: 2,
  previewImage: 'https://8.react.pages.academy/static/hotel/3.jpg',
  price: 268,
  rating: 2.8,
  title: 'Waterfront with extraordinary view',
  type: 'room',
  bedrooms: 1,
  city: {
    name: 'Paris',
    location: {
      latitude: 48.85661,
      longitude: 2.351499,
      zoom: 13,
    },
  },
};

export const mockOffer: OfferType = {
  bedrooms: 1,
  city: {
    name: 'Paris',
    location: {
      latitude: 48.85661,
      longitude: 2.351499,
      zoom: 13,
    },
  },
  description: 'Discover daily local life in city center, friendly neighborhood, clandestine casino, karaoke, old-style artisans, art gallery and artist studio downstairs.',
  goods: ['Air conditioning', 'Breakfast', 'Washer', 'Towels', 'Baby seat', 'Laptop friendly workspace'],
  host: {
    id: 25,
    name: 'Angelina',
    isPro: true,
    avatarUrl: 'img/avatar-angelina.jpg',
  },
  id: 11,
  images: ['https://8.react.pages.academy/static/hotel/13.jpg', 'https://8.react.pages.academy/static/hotel/17.jpg', 'https://8.react.pages.academy/static/hotel/5.jpg', 'https://8.react.pages.academy/static/hotel/16.jpg', 'https://8.react.pages.academy/static/hotel/1.jpg', 'https://8.react.pages.academy/static/hotel/3.jpg', 'https://8.react.pages.academy/static/hotel/6.jpg', 'https://8.react.pages.academy/static/hotel/18.jpg', 'https://8.react.pages.academy/static/hotel/20.jpg', 'https://8.react.pages.academy/static/hotel/8.jpg', 'https://8.react.pages.academy/static/hotel/15.jpg', 'https://8.react.pages.academy/static/hotel/9.jpg', 'https://8.react.pages.academy/static/hotel/2.jpg', 'https://8.react.pages.academy/static/hotel/4.jpg'],
  isFavorite: false,
  isPremium: false,
  location: {
    latitude: 48.843610000000005,
    longitude: 2.338499,
    zoom: 16,
  },
  maxAdults: 2,
  previewImage: 'https://8.react.pages.academy/static/hotel/3.jpg',
  price: 268,
  rating: 2.8,
  title: 'Waterfront with extraordinary view',
  type: 'room',
};

export const mockComment: CommentType = {
  comment: 'Bathed in the nature. Completely unplugged. Unforgettable.',
  date: '2021-11-10T09:57:05.857Z',
  id: 1,
  rating: 3,
  user: {
    avatarUrl: 'https://8.react.pages.academy/static/avatar/10.jpg',
    id: 19,
    isPro: false,
    name: 'Christina',
  },
};

export const mockUserData: AuthInfoType = {
  avatarUrl: 'https://8.react.pages.academy/static/avatar/8.jpg',
  email: 'mock@mock.ru',
  id: 1,
  isPro: false,
  name: 'mock',
  token: 'secret',
};

export enum AppRoute {
  Main = '/',
  SignIn = '/login',
  Favorites = '/favorites',
  Room  = '/offer/:id',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}


export const AMSTERDAM_OFFERS = [{
    city: {
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10,
      },
      name: 'Amsterdam',
    },
    location: {
      latitude: 30.370216938496378,
      longitude: 7.873877537499948,
      zoom: 8,
    },
    host: {
      avatarUrl: 'img/avatar-angelina.jpg',
      id: 14,
      isPro: true,
      name: 'Mary',
    },
    id: 1,
    bedrooms: 1,
    description: 'Morbi placerat purus purus, quis maximus metus auctor ut. Suspendisse eget luctus erat. ',
    goods: ['Cable TV', 'Washing machine','Dishwasher'],
    images: ['img/apartment-01.jpg', 'img/apartment-03.jpg', 'img/apartment-02.jpg'],
    isFavorite: true,
    isPremium: true,
    maxAdults: 4,
    previewImage: 'img/apartment-01.jpg',
    price: 80,
    rating: 4,
    title: 'Phasellus ultricies sem at imperdiet auctor',
    type: 'room',
  }, {
    city: {
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10,
      },
      name: 'Amsterdam',
    },
    location: {
      latitude: 52.35514938496378,
      longitude: 4.673877537499948,
      zoom: 8,
    },
    host: {
      avatarUrl: 'img/avatar-angelina.jpg',
      id: 3,
      'isPro': true,
      name: 'Angelina',
    },
    id: 5,
    bedrooms: 2,
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    goods: ['Heating', 'Kitchen', 'Cable TV', 'Washing machine', 'Dishwasher'],
    images: ['apartment-small-04'],
    isFavorite: true,
    isPremium: false,
    maxAdults: 4,
    previewImage: 'img/apartment-small-04.jpg',
    price: 120,
    rating: 4.8,
    title: 'Beautiful & luxurious studio at great location',
    type: 'apartment',
  }];

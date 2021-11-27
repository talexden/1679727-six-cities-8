export type CityType = {
  location: {
    latitude: number,
    longitude: number,
    zoom: number,
  },
  name: string,
}

type LocationType = {
  latitude: number,
  longitude: number,
  zoom: number,
}

type HostType = {
  avatarUrl: string,
  id: number,
  isPro: boolean,
  name: string,
}


export type OfferType = {
  city: CityType,
  location: LocationType,
  host: HostType,
  id: number,
  bedrooms: number,
  description: string,
  goods: string[],
  images: string[],
  isFavorite: boolean,
  isPremium: boolean,
  maxAdults: number,
  previewImage: string,
  price: number,
  rating: number,
  title: string,
  type: string,
}


export type OfferAdaptedType = {
  bedrooms: number,
  city: CityType,
  description: string,
  goods: string[],
  host: UserAdapted,
  id: number,
  images: string[],
  ['is_favorite']: boolean,
  ['is_premium']: boolean,
  location: LocationType,
  ['max_adults']: number,
  ['preview_image']: string,
  price: number,
  rating: number,
  title: string,
  type: string,
}

export type User = {
  avatarUrl?: string,
  email?: string,
  id: number,
  isPro?: boolean,
  name: string,
  token?: string,
}

export type UserAdapted = {
  ['avatar_url']?: string,
  email?: string,
  id: number,
  ['is_pro']?: boolean,
  name: string,
  token?: string,
}

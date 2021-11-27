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

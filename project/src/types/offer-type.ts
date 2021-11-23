export type OfferType = {
    city: {
        location: {
            latitude: number,
            longitude: number,
            zoom: number,
        },
        name: string,
    },
    location: {
        latitude: number,
        longitude: number,
        zoom: number,
    },
    host: {
        avatarUrl: string,
        id: number,
        isPro: boolean,
        name: string,
    },
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

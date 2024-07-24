type HostType = {
  name: string;
  avatar: string;
  isPro: boolean;
  description: string;
}

export type CityType = {
  location: {
    latitude: number;
    longitude: number;
  };
  title: string;
}

export type OfferType = {
  id: string;
  title: string;
  images: {
    id: number;
    path: string;
  }[];
  isPremium: boolean;
  isFavorite: boolean;
  price: number;
  rating: number;
  type: string;
  bedroomsCount: number;
  maxAdults: number;
  inside: {
    id: number;
    title: string;
  }[];
  host: HostType;
  city: CityType;
}

export type OffersType = OfferType[];

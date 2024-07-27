import {LocationType} from './location';
import {UserType} from './user';

type OfferTemplateType = {
  id: string;
  title: string;
  type: string;
  price: number;
  city: {
    name: string;
    location: LocationType;
  };
  location: LocationType;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
};

export type OfferCardType = OfferTemplateType & {
  previewImage: string;
};

export type OffersCardType = OfferCardType[];

export type OfferType = OfferTemplateType & {
  description: string;
  images: string[];
  goods: string[];
  host: UserType;
  bedrooms: number;
  maxAdults: number;
};

export type OffersType = OfferType[];

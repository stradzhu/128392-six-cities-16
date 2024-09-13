import {ReviewsType} from './types/review';
import {ReviewSetting, SortTypes} from './const';
import {OffersCardType} from './types/offer';

export const getRating = (rating: number): string => `${Math.round(rating) * 100 / 5}%`;

export const upFirstLetter = (str: string) => `${str[0].toUpperCase()}${str.slice(1)}`;

export const getBedroomsString = (count: number) => `${count} Bedroom${count > 1 ? 's' : ''}`;

export const getAdultsString = (count: number) => `Max ${count} adult${count > 1 ? 's' : ''}`;

export const getActualReviews = (reviews: ReviewsType): ReviewsType => (
  reviews.slice().sort((reviewA, reviewB) => Date.parse(reviewB.date) - Date.parse(reviewA.date))
    .slice(0, ReviewSetting.MaxCountPerPage));

export const getAttributeDate = (date: string) => new Date(date).toLocaleString('en-US');

export const getMarkupDate = (date: string) => new Date(date).toLocaleString('en-US', {year: 'numeric', month: 'long'});

export const getOffersCardByCity = (offers: OffersCardType) => {
  const citiesList = Array.from(new Set(offers.map(({city}) => city.name))).sort();
  const offersCardByCity: {[key: string]: OffersCardType} = {};

  citiesList.forEach((cityName) => {
    offersCardByCity[cityName] = offers.filter(({city: {name}}) => name === cityName);
  });

  return offersCardByCity;
};

export const getSortedOffersCard = (offersCard: OffersCardType, SortType: typeof SortTypes[keyof typeof SortTypes]): OffersCardType => {
  switch (SortType) {
    case SortTypes.PriceUp: {
      return offersCard.slice().sort((offerCardA, offerCardB) => offerCardB.price - offerCardA.price);
    }
    case SortTypes.PriceDown: {
      return offersCard.slice().sort((offerCardA, offerCardB) => offerCardA.price - offerCardB.price);
    }
    case SortTypes.RatingDown: {
      return offersCard.slice().sort((offerCardA, offerCardB) => offerCardB.rating - offerCardA.rating);
    }
    default: {
      return offersCard;
    }
  }
};

// Функция для замедления запросов, чтобы лучше отладить приложение
export const sleep = (ms = 2000): Promise<void> => new Promise((resolve) => setTimeout(resolve, ms));

import {AllCityList, AuthorizationStatus, SortTypes} from '../const';
import {OffersCardType, OfferType} from './offer';
import {ReviewsType} from './review';
import {store} from '../store';
import {UserAuthType} from './user';

export type MainProcessType = {
  activeCity: typeof AllCityList[number];
  sortType: typeof SortTypes[keyof typeof SortTypes];
}

export type UserProcessType = {
  authorizationStatus: AuthorizationStatus;
  user: null | UserAuthType;
}

export type DataProcessType = {
  offersCard: OffersCardType;
  offer: null | OfferType;
  nearOffersCard: OffersCardType;
  reviews: ReviewsType;
  favorites: OffersCardType;
}

export type StateType = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

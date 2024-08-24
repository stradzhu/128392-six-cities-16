import {AllCityList, AuthorizationStatus, SortTypes} from '../const';
import {OffersCardType, OffersType} from './offer';
import {ReviewsType} from './review';
import {store} from '../store';
import {UserAuthType} from './user';

// Можно и так:
// export type StateType = ReturnType<typeof store.getState>;

export type StateType = {
  activeCity: typeof AllCityList[number];
  sortType: typeof SortTypes[keyof typeof SortTypes];
  authorizationStatus: AuthorizationStatus;
  offersCard: OffersCardType;
  offers: OffersType;
  reviews: ReviewsType;
  isDataLoading: boolean;
  user: null | UserAuthType;
};

export type AppDispatch = typeof store.dispatch;

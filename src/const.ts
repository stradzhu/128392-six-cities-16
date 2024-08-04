export enum AppRoute {
  Main = '/',
  Login = '/login',
  Favorites = '/favorites',
  Offer = '/offer/:id',
  NotFound = '*'
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export const URL_MARKER_DEFAULT = '/img/pin.svg';

export const URL_MARKER_CURRENT = '/img/pin-active.svg';

export const MAX_OFFER_PHOTO = 6;

export const ReviewSetting = {
  MIN: 50,
  MAX: 300,
  MAX_COUNT_PER_PAGE: 10
};

export const ALL_CITY_LIST = [
  'Paris',
  'Cologne',
  'Brussels',
  'Amsterdam',
  'Hamburg',
  'Dusseldorf',
] as const;

export const DEFAULT_CITY = ALL_CITY_LIST[0];

export const SortTypes = {
  POPULAR: 'Popular',
  PRICE_DOWN: 'Price: low to high',
  PRICE_UP: 'Price: high to low',
  RATING_DOWN: 'Top rated first',
} as const;

export const DEFAULT_SORT_TYPE = SortTypes.POPULAR;

export const RatingStar: {
  mark: number;
  title: string;
}[] = [
  {
    mark: 5,
    title: 'perfect',
  },
  {
    mark: 4,
    title: 'good',
  },
  {
    mark: 3,
    title: 'not bad',
  },
  {
    mark: 2,
    title: 'badly',
  },
  {
    mark: 1,
    title: 'terribly',
  },
];

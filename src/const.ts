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

export const MapMarker = {
  Default: '/img/pin.svg',
  Current: '/img/pin-active.svg'
} as const;

export const MAX_OFFER_PHOTO = 6;

export const ReviewSetting = {
  Min: 50,
  Max: 300,
  MaxCountPerPage: 10
} as const;

export const AllCityList = [
  'Paris',
  'Cologne',
  'Brussels',
  'Amsterdam',
  'Hamburg',
  'Dusseldorf',
] as const;

export const DEFAULT_CITY = AllCityList[0];

export const SortTypes = {
  Popular: 'Popular',
  PriceDown: 'Price: low to high',
  PriceUp: 'Price: high to low',
  RatingDown: 'Top rated first',
} as const;

export const DEFAULT_SORT_TYPE = SortTypes.Popular;

export const RatingStar = [
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
] as const;

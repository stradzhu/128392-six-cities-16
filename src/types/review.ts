import {UserType} from './user';

export type ReviewType = {
  id: string;
  date: string;
  user: UserType;
  comment: string;
  rating: number;
}

export type ReviewsType = ReviewType[];

export type ReviewNewType = {
  offerId: string;
  body: {
    comment: string;
    rating: number;
  };
}

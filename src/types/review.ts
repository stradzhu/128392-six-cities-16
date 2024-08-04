import {UserType} from './user';

export type ReviewType = {
  id: string;
  comment: string;
  date: string;
  rating: number;
  user: UserType;
}

export type ReviewsType = ReviewType[];

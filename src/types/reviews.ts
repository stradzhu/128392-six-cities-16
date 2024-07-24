export type ReviewType = {
  id: number;
  name: string;
  avatar: string;
  rating: number;
  text: string;
  date: string;
}

export type ReviewsType = ReviewType[];

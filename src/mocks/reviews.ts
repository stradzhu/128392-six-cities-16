import {ReviewsType} from '../types/review';

export const reviews: ReviewsType = [
  {
    id: 'e8e32329-313d-44e8-8f7e-fe5e4463b18e',
    comment: 'Bathed in the nature. Completely unplugged. Unforgettable.',
    date: '2023-07-03T21:00:00.049Z',
    rating: 3,
    user: {
      name: 'Christina',
      avatarUrl: 'img/static/avatar/8.jpg',
      isPro: false
    }
  },
  {
    id: '09cb3c3b-d0a9-48ea-99ca-907a5d72195b',
    comment: 'I stayed here for one night and it was an unpleasant experience.',
    date: '2023-05-01T21:00:00.049Z',
    rating: 1,
    user: {
      name: 'Jack',
      avatarUrl: 'img/static/avatar/7.jpg',
      isPro: false
    }
  },
  {
    id: '4fb87871-5de4-4b8b-a8c3-0c9abd74c4d0',
    comment: 'We loved it so much, the house, the veiw, the location just great.. Highly reccomend :)',
    date: '2023-09-05T21:00:00.049Z',
    rating: 1,
    user: {
      name: 'Max',
      avatarUrl: 'img/static/avatar/6.jpg',
      isPro: false
    }
  }
];

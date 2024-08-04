import {AuthorizationStatus} from '../../const';
import {ReviewsType} from '../../types/review';
import ReviewsList from '../reviews-list/reviews-list';
import ReviewsForm from '../reviews-form/reviews-form';
import {useState} from 'react';

type ReviewsProps = {
  reviews: ReviewsType;
  authorizationStatus: AuthorizationStatus;
}

function Reviews({reviews, authorizationStatus}: ReviewsProps): JSX.Element {
  const isAuthenticated = authorizationStatus === AuthorizationStatus.Auth;

  const [reviewsData, setReviewsData] = useState(reviews);

  return (
    <section className="offer__reviews reviews">
      {reviews.length > 0 && <ReviewsList reviews={reviewsData}/>}
      {isAuthenticated && <ReviewsForm setReviewsData={setReviewsData}/>}
    </section>
  );
}

export default Reviews;

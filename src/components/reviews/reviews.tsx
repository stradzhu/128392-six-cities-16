import ReviewsList from '../reviews-list/reviews-list';
import ReviewsForm from '../reviews-form/reviews-form';
import {useAppSelector} from '../../hooks';
import {AuthorizationStatus} from '../../const';
import {getAuthorizationStatusSelector} from '../../store/user-process/user-process.selectors.ts';
import {getReviewsSelector} from '../../store/data-process/data-process.selectors.ts';

function Reviews(): JSX.Element {
  const authorizationStatus = useAppSelector(getAuthorizationStatusSelector);
  const reviews = useAppSelector(getReviewsSelector);
  const isAuthenticated = authorizationStatus === AuthorizationStatus.Auth;

  return (
    <section className="offer__reviews reviews">
      {reviews.length > 0 && <ReviewsList reviews={reviews}/>}
      {isAuthenticated && <ReviewsForm/>}
    </section>
  );
}

export default Reviews;

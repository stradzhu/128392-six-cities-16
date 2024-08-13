import ReviewsList from '../reviews-list/reviews-list';
import ReviewsForm from '../reviews-form/reviews-form';
import {useAppSelector} from '../../hooks';
import {AuthorizationStatus} from '../../const';

function Reviews(): JSX.Element {
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
  const reviews = useAppSelector((state) => state.reviews);
  const isAuthenticated = authorizationStatus === AuthorizationStatus.Auth;

  return (
    <section className="offer__reviews reviews">
      {reviews.length > 0 && <ReviewsList reviews={reviews}/>}
      {isAuthenticated && <ReviewsForm/>}
    </section>
  );
}

export default Reviews;

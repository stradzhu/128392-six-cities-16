import ReviewsList from '../reviews-list/reviews-list';
import ReviewsForm from '../reviews-form/reviews-form';
import {useAppSelector} from '../../hooks';
import {AuthorizationStatus} from '../../const';
import {userSelectors} from '../../store/slice/user.ts';
import {dataSelectors} from '../../store/slice/data.ts';

function Reviews(): JSX.Element {
  const authorizationStatus = useAppSelector(userSelectors.authorizationStatus);
  const reviews = useAppSelector(dataSelectors.reviews);
  const isAuthenticated = authorizationStatus === AuthorizationStatus.Auth;

  return (
    <section className="offer__reviews reviews">
      {reviews.length > 0 && <ReviewsList reviews={reviews}/>}
      {isAuthenticated && <ReviewsForm/>}
    </section>
  );
}

export default Reviews;

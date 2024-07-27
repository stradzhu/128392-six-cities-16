import {getActualReviews, getAttributeDate, getMarkupDate, getRating} from '../../utils';
import {ReviewsType} from '../../types/review';

type ReviewsListProps = {
  reviews: ReviewsType;
}

function ReviewsList({reviews}: ReviewsListProps): JSX.Element {
  const actualReviews = getActualReviews(reviews);

  return (
    <>
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
      <ul className="reviews__list">
        {actualReviews.map(({id, comment, date, rating, user}) => (
          <li key={id} className="reviews__item">
            <div className="reviews__user user">
              <div className="reviews__avatar-wrapper user__avatar-wrapper">
                <img className="reviews__avatar user__avatar" src={user.avatarUrl} width="54" height="54" alt={user.name}/>
              </div>
              <span className="reviews__user-name">
                {user.name}
              </span>
            </div>
            <div className="reviews__info">
              <div className="reviews__rating rating">
                <div className="reviews__stars rating__stars">
                  <span style={{width: getRating(rating)}}/>
                  <span className="visually-hidden">Rating</span>
                </div>
              </div>
              <p className="reviews__text">
                {comment}
              </p>
              <time className="reviews__time" dateTime={getAttributeDate(date)}>
                {getMarkupDate(date)}
              </time>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default ReviewsList;

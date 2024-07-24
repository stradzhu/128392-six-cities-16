import {ChangeEvent, Dispatch, Fragment, SetStateAction, SyntheticEvent, useState} from 'react';
import {RatingStar} from '../../const';
import {ReviewsType, ReviewType} from '../../types/reviews';

type ReviewsFormProp = {
  setReviewsData: Dispatch<SetStateAction<ReviewsType>>;
}

function ReviewsForm({setReviewsData}: ReviewsFormProp): JSX.Element {
  const [formData, setFormData] = useState({
    review: '',
    rating: '0',
  });

  const handleFieldChange = (evt: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {name, value} = evt.target;
    setFormData({...formData, [name]: value});
  };

  const disableSubmit = ():boolean => formData.review.length <= 50 || !formData.rating;

  const handleSubmit = (evt: SyntheticEvent) => {
    evt.preventDefault();

    if (disableSubmit()) {
      return false;
    }

    const newReview: ReviewType = {
      id: Math.random(),
      name: 'Dima',
      avatar: 'img/avatar-max.jpg',
      rating: Number(formData.rating),
      text: formData.review,
      date: new Date().toISOString(),
    };

    setReviewsData((reviews) => {
      setFormData({
        review: '',
        rating: '0',
      });

      return [...reviews, newReview];
    });
  };

  return (
    <form className="reviews__form form" action="#" method="post" onSubmit={handleSubmit}>
      <h3 style={{width: '100%'}}>
        Для теста: formData.rating = {formData.rating}
        <br/>  Для теста: formData.review = {formData.review}
      </h3>
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {RatingStar.map(({mark, title})=>(
          <Fragment key={mark}>
            <input className="form__rating-input visually-hidden"
              name="rating"
              value={mark}
              id={`${mark}-stars`}
              type="radio"
              onChange={handleFieldChange}
              checked={formData.rating === String(mark)}
            />
            <label htmlFor={`${mark}-stars`} className="reviews__rating-label form__rating-label" title={title}>
              <svg className="form__star-image" width="37" height="33">
                <use xlinkHref="#icon-star" />
              </svg>
            </label>
          </Fragment>
        ))}
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review" name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        onChange={handleFieldChange}
        value={formData.review}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={disableSubmit()}>Submit</button>
      </div>
    </form>
  );
}

export default ReviewsForm;

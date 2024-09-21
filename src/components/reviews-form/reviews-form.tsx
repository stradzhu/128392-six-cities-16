import {ChangeEvent, Fragment, SyntheticEvent, useRef, useState} from 'react';
import {RatingStar, ReviewSetting} from '../../const';
import {useParams} from 'react-router-dom';
import {useActionCreators} from '../../hooks';
import {dataActions} from '../../store/slice/data.ts';

function ReviewsForm(): JSX.Element {
  const {id: offerId} = useParams();
  const buttonSubmitRef = useRef<HTMLButtonElement | null>(null);
  const {sendReviewAction} = useActionCreators(dataActions);

  const [formData, setFormData] = useState({
    review: '',
    rating: '0',
  });

  const handleFieldChange = (evt: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {name, value} = evt.target;
    setFormData({...formData, [name]: value});
    setFormData((prevState) => {
      const newState = {...prevState, [name]: value};

      // TODO: уже сомневаюсь, что это была хорошая идея из стейта перенести в реф
      buttonSubmitRef.current!.disabled = newState.review.length < ReviewSetting.Min
        || newState.review.length > ReviewSetting.Max
        || !newState.rating;

      return newState;
    });
  };

  const handleSubmit = (evt: SyntheticEvent) => {
    evt.preventDefault();

    sendReviewAction({
      offerId: offerId!,
      body: {
        comment: formData.review,
        rating: Number(formData.rating)
      }
    })
      .unwrap()
      .then(() => {
        setFormData({
          review: '',
          rating: '0',
        });
      });
  };

  return (
    <form className="reviews__form form" action="#" method="post" onSubmit={handleSubmit}>
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
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">{ReviewSetting.Min} characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" ref={buttonSubmitRef} disabled>Submit</button>
      </div>
    </form>
  );
}

export default ReviewsForm;

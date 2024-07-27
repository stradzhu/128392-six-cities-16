import * as classNames from 'classnames';
import {OfferCardType} from '../../types/offer';
import {generatePath, Link} from 'react-router-dom';
import {AppRoute} from '../../const';
import {getRating, upFirstLetter} from '../../utils';
import FavoriteButton from '../favorite-button/favorite-button';

type CardProps = {
  offerCard: OfferCardType;
  className: string;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
};

const FAVORITES_CLASS_NAME = 'favorites';

function Card({offerCard, className, onMouseEnter, onMouseLeave}: CardProps): JSX.Element {
  const imgWidth = className === FAVORITES_CLASS_NAME ? 150 : 260;
  const imgHeight = className === FAVORITES_CLASS_NAME ? 110 : 200;

  const {isPremium, id, previewImage, price, isFavorite, rating, title, type} = offerCard;

  return (
    <article className={`${className}__card place-card`} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      {isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}
      <div className={`${className}__image-wrapper place-card__image-wrapper`}>
        <Link to={generatePath(AppRoute.Offer, {id})}>
          <img className="place-card__image" src={previewImage} width={imgWidth} height={imgHeight} alt="Place image" />
        </Link>
      </div>
      <div className={classNames({'favorites__card-info': className === FAVORITES_CLASS_NAME}, 'place-card__info')}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <FavoriteButton className="place-card" isFavorite={isFavorite}/>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: getRating(rating)}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={generatePath(AppRoute.Offer, {id})}>
            {title}
          </Link>
        </h2>
        <p className="place-card__type">{upFirstLetter(type)}</p>
      </div>
    </article>
  );
}

export default Card;

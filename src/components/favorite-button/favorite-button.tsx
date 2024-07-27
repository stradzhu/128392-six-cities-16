import {clsx} from 'clsx';

type FavoriteButtonProps = {
  className: string;
  isFavorite: boolean;
}

const OFFER_CLASS_NAME = 'offer';

function FavoriteButton({className, isFavorite}: FavoriteButtonProps): JSX.Element {
  const imgWidth = className === OFFER_CLASS_NAME ? 31 : 18;
  const imgHeight = className === OFFER_CLASS_NAME ? 33 : 19;

  return (
    <button className={clsx(`${className}__bookmark-button`, {[`${className}__bookmark-button--active`]: isFavorite}, 'button')} type="button">
      <svg className="place-card__bookmark-icon" width={imgWidth} height={imgHeight}>
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">{isFavorite ? 'In bookmarks' : 'To bookmarks'}</span>
    </button>
  );
}

export default FavoriteButton;

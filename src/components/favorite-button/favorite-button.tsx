import {clsx} from 'clsx';
import {useState} from 'react';
import {useActionCreators} from '../../hooks';
import {dataActions} from '../../store/slice/data.ts';

type FavoriteButtonProps = {
  className: string;
  isFavorite: boolean;
  offerId: string;
}

const OFFER_CLASS_NAME = 'offer';

function FavoriteButton({className, isFavorite, offerId}: FavoriteButtonProps): JSX.Element {
  const imgWidth = className === OFFER_CLASS_NAME ? 31 : 18;
  const imgHeight = className === OFFER_CLASS_NAME ? 33 : 19;
  const [isPending, setIsPending] = useState<boolean>(false);
  const {changeFavoriteOfferCardAction} = useActionCreators(dataActions);

  const handleClick = () => {
    setIsPending(true);
    changeFavoriteOfferCardAction({offerId, status: Number(!isFavorite)})
      .then(() => setIsPending(false));
  };

  return (
    <button
      className={clsx(`${className}__bookmark-button`, {[`${className}__bookmark-button--active`]: isFavorite}, 'button')}
      type="button" disabled={isPending} onClick={handleClick}
    >
      <svg className={`${className}__bookmark-icon`} width={imgWidth} height={imgHeight}>
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">{isFavorite ? 'In bookmarks' : 'To bookmarks'}</span>
    </button>
  );
}

export default FavoriteButton;

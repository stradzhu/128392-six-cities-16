import {OffersCardType} from '../../types/offer';
import Card from '../card/card';
import {memo} from 'react';

type CardListProps = {
  offersCard: OffersCardType;
  className: string;
  onOfferCardHover?: (id?: string) => void;
}

function CardList({offersCard, className, onOfferCardHover}: CardListProps): JSX.Element {
  return (
    <>
      {offersCard.map((offerCard) => (
        <Card
          key={offerCard.id}
          offerCard={offerCard}
          className={className}
          {...(onOfferCardHover && {
            onMouseEnter: () => onOfferCardHover(offerCard.id),
            onMouseLeave: () => onOfferCardHover(),
          })}
        />
      ))}
    </>
  );
}

const CardListMemo = memo(CardList);

export default CardListMemo;

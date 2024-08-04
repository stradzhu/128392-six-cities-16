import {OffersCardType} from '../../types/offer';
import Card from '../card/card';

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

export default CardList;

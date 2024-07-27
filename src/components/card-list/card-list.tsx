import {OffersCardType} from '../../types/offer';
import {useState} from 'react';
import Card from '../card/card';

type CardListProps = {
  offersCard: OffersCardType;
  className: string;
}

function CardList({offersCard, className}: CardListProps): JSX.Element {
  const [,setActiveCard] = useState('0');

  return (
    <>
      {offersCard.map((offerCard) => (
        <Card
          key={offerCard.id}
          offerCard={offerCard}
          className={className}
          onMouseEnter = {() => setActiveCard(offerCard.id)}
          onMouseLeave = {() => setActiveCard('0')}
        />
      ))}
    </>
  );
}

export default CardList;

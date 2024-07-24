import {OffersType} from '../../types/offer';
import {useState} from 'react';
import Card from '../card/card';

type CardListProp = {
  offers: OffersType;
  blockClass: string;
  elementClass: string;
}

function CardList({offers, blockClass, elementClass}: CardListProp): JSX.Element {
  const [activeCard, setActiveCard] = useState('0');

  return (
    <>
      <h3 style={{width: '100%'}}>
        Для теста: activeCard = {activeCard}
      </h3>
      {offers.map((offer) => (
        <Card
          key={offer.id}
          offer={offer}
          blockClass={blockClass}
          elementClass={elementClass}
          onMouseEnter = {() => setActiveCard(offer.id)}
          onMouseLeave = {() => setActiveCard('0')}
        />
      ))}
    </>
  );
}

export default CardList;

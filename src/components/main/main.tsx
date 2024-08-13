import {OffersCardType} from '../../types/offer';
import CardList from '../card-list/card-list';
import PlacesSorting from '../places-sorting/places-sorting';
import Map from '../map/map';
import {useState} from 'react';

type MainProps = {
  offersCard: OffersCardType;
}

function Main({offersCard}: MainProps): JSX.Element {
  const [hoveredOfferId, setHoveredOfferId] = useState<string | undefined>(undefined);

  return (
    <div className="cities__places-container container">
      <section className="cities__places places">
        <h2 className="visually-hidden">Places</h2>
        <b className="places__found">{offersCard.length} places to stay in Amsterdam</b>
        <PlacesSorting/>
        <div className="cities__places-list places__list tabs__content">
          <CardList offersCard={offersCard} className="cities" onOfferCardHover={setHoveredOfferId}/>
        </div>
      </section>
      <div className="cities__right-section">
        <section className="cities__map map">
          <Map points={offersCard.map(({location, id}) => ({location, id}))} hoveredOfferId={hoveredOfferId}/>
        </section>
      </div>
    </div>
  );
}

export default Main;

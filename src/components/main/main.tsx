import {OffersType} from '../../types/offer';
import CardList from '../card-list/card-list';
import PlacesSorting from '../places-sorting/places-sorting';

type MainProps = {
  offers: OffersType;
}

function Main({offers}: MainProps): JSX.Element {
  return (
    <div className="cities__places-container container">
      <section className="cities__places places">
        <h2 className="visually-hidden">Places</h2>
        <b className="places__found">{offers.length} places to stay in Amsterdam</b>
        <PlacesSorting/>
        <div className="cities__places-list places__list tabs__content">
          <CardList offers={offers} blockClass="cities__card" elementClass="cities__image-wrapper"/>
        </div>
      </section>
      <div className="cities__right-section">
        <section className="cities__map map"></section>
      </div>
    </div>
  );
}

export default Main;

import {OffersCardType} from '../../types/offer';
import CardList from '../card-list/card-list';
import PlacesSorting from '../places-sorting/places-sorting';
import {SortTypes} from '../../const';

type MainProps = {
  offersCard: OffersCardType;
  sortType: typeof SortTypes[keyof typeof SortTypes];
}

function Main({offersCard, sortType}: MainProps): JSX.Element {
  return (
    <div className="cities__places-container container">
      <section className="cities__places places">
        <h2 className="visually-hidden">Places</h2>
        <b className="places__found">{offersCard.length} places to stay in Amsterdam</b>
        <PlacesSorting sortType={sortType}/>
        <div className="cities__places-list places__list tabs__content">
          <CardList offersCard={offersCard} className="cities"/>
        </div>
      </section>
      <div className="cities__right-section">
        <section className="cities__map map"></section>
      </div>
    </div>
  );
}

export default Main;

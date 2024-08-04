import {OffersCardType} from '../../types/offer';
import {Link} from 'react-router-dom';
import Card from '../card/card';
import {AppRoute} from '../../const';
import {getOffersCardByCity} from '../../utils';

type FavoritesProps = {
  favorites: OffersCardType;
}

function Favorites({favorites}: FavoritesProps): JSX.Element {
  const offersCardByCity = getOffersCardByCity(favorites);

  return (
    <section className="favorites">
      <h1 className="favorites__title">Saved listing</h1>
      <ul className="favorites__list">
        {Object.entries(offersCardByCity).map(([city, offersCard]) => (
          <li key={city} className="favorites__locations-items">
            <div className="favorites__locations locations locations--current">
              <div className="locations__item">
                {/* TODO: сделать ссылку на конкретный город */}
                <Link to={AppRoute.Main} className="locations__item-link">
                  <span>{city}</span>
                </Link>
              </div>
            </div>
            <div className="favorites__places">
              {offersCard.map((offerCard) => <Card key={offerCard.id} offerCard={offerCard} className="favorites"/>)}
            </div>
          </li>))}
      </ul>
    </section>
  );
}

export default Favorites;

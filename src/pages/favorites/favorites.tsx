import {Helmet} from 'react-helmet-async';
import Favorites from '../../components/favorites/favorites';
import FavoritesEmpty from '../../components/favorites-empty/favorites-empty';
import {OffersCardType} from '../../types/offer';

type FavoritesProps = {
  favorites: OffersCardType;
}

function FavoritesScreen({favorites}: FavoritesProps): JSX.Element {
  return (
    <main className={`page__main page__main--favorites ${favorites.length ? '' : 'page__main--favorites-empty'}`}>
      <Helmet>
        <title>6 cities: favorites {favorites.length ? '' : 'empty'}</title>
      </Helmet>
      <div className="page__favorites-container container">
        {favorites.length ? <Favorites favorites={favorites}/> : <FavoritesEmpty/>}
      </div>
    </main>
  );
}

export default FavoritesScreen;

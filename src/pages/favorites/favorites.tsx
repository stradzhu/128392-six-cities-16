import {Helmet} from 'react-helmet-async';
import Favorites from '../../components/favorites/favorites';
import FavoritesEmpty from '../../components/favorites-empty/favorites-empty';

type FavoritesProps = {
  favoritesCount: number;
}

function FavoritesScreen({favoritesCount}: FavoritesProps): JSX.Element {
  return (
    <main className={`page__main page__main--favorites ${favoritesCount ? '' : 'page__main--favorites-empty'}`}>
      <Helmet>
        <title>6 cities: favorites {favoritesCount ? '' : 'empty'}</title>
      </Helmet>
      <div className="page__favorites-container container">
        {favoritesCount ? <Favorites/> : <FavoritesEmpty/>}
      </div>
    </main>
  );
}

export default FavoritesScreen;

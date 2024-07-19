import {Helmet} from 'react-helmet-async';
import Favorites from '../../components/favorites/favorites';
import FavoritesEmpty from '../../components/favorites-empty/favorites-empty';

type FavoritesProps = {
  favoritesCount: number;
}

function FavoritesScreen({favoritesCount}: FavoritesProps): JSX.Element {
  return (
    <main className="page__main page__main--favorites">
      <Helmet>
        <title>6 cities: favorites</title>
      </Helmet>
      <div className="page__favorites-container container">
        {favoritesCount ? <Favorites/> : <FavoritesEmpty/>}
      </div>
    </main>
  );
}

export default FavoritesScreen;

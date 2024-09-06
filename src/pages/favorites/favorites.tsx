import {Helmet} from 'react-helmet-async';
import Favorites from '../../components/favorites/favorites';
import FavoritesEmpty from '../../components/favorites-empty/favorites-empty';
import {useAppSelector} from '../../hooks';
import {getOffersCardSelector} from '../../store/data-process/data-process.selectors.ts';

function FavoritesScreen(): JSX.Element {
  const offersCard = useAppSelector(getOffersCardSelector);
  const favorites = offersCard.filter(({isFavorite}) => isFavorite);

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

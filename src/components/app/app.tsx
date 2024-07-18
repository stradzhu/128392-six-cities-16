import {CardType} from '../../const';
import MainScreen from '../../pages/main/main';
// import FavoritesScreen from '../../pages/favorites/favorites';
// import FavoritesEmptyScreen from '../../pages/favorites-empty/favorites-empty';
// import LoginScreen from '../../pages/login/login';
// import MainEmptyScreen from '../../pages/main-empty/main-empty';
// import OfferScreen from '../../pages/offer/offer';
// import OfferNotLoggedScreen from '../../pages/offer-not-logged/offer-not-logged';

type AppProps = {
  offersCount: number;
  cards: CardType[];
}

function App({offersCount, cards}: AppProps): JSX.Element {
  return (
    <MainScreen offersCount={offersCount} cards={cards} />
    // <FavoritesScreen/>
    // <FavoritesEmptyScreen/>
    // <LoginScreen/>
    // <MainEmptyScreen/>
    // <OfferScreen/>
    // <OfferNotLoggedScreen/>
  );
}

export default App;

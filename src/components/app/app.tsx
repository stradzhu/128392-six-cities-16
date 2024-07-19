import {Route, BrowserRouter, Routes} from 'react-router-dom';
import {HelmetProvider} from 'react-helmet-async';
import {CardType, AppRoute, AuthorizationStatus} from '../../const';
import RequireAuth from '../require-auth/require-auth';
import Layout from '../layout/layout';

import MainScreen from '../../pages/main/main';
import FavoritesScreen from '../../pages/favorites/favorites';
import LoginScreen from '../../pages/login/login';
import OfferScreen from '../../pages/offer/offer';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';

type AppProps = {
  offersCount: number;
  favoritesCount: number;
  cards: CardType[];
  authorizationStatus: AuthorizationStatus;
}

function App({offersCount, cards, favoritesCount, authorizationStatus}: AppProps): JSX.Element {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path={AppRoute.Main} element={<Layout authorizationStatus={authorizationStatus} favoritesCount={favoritesCount}/>}>
            <Route index element={<MainScreen offersCount={offersCount} cards={cards} />} />
            <Route path={AppRoute.Login} element={<LoginScreen/>} />
            <Route path={AppRoute.Favorites} element={
              <RequireAuth authorizationStatus={authorizationStatus}>
                <FavoritesScreen favoritesCount={favoritesCount}/>
              </RequireAuth>
            }
            />
            <Route path={AppRoute.Offer} element={<OfferScreen authorizationStatus={authorizationStatus}/>} />
            <Route path={AppRoute.NotFound} element={<NotFoundScreen />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;

import {RouterProvider, createBrowserRouter} from 'react-router-dom';
import {HelmetProvider} from 'react-helmet-async';
import {AllCityList, AppRoute, AuthorizationStatus, SortTypes} from '../../const';
import {OffersCardType, OffersType} from '../../types/offer';
import {PrivateRoute, PublicRoute} from '../access-route/access-route';
import Layout from '../layout/layout';

import MainScreen from '../../pages/main/main';
import FavoritesScreen from '../../pages/favorites/favorites';
import LoginScreen from '../../pages/login/login';
import OfferScreen from '../../pages/offer/offer';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';
import ErrorScreen from '../../pages/error-screen/error-screen';
import {ReviewsType} from '../../types/review';

type AppProps = {
  activeCity: typeof AllCityList[number];
  sortType: typeof SortTypes[keyof typeof SortTypes];
  offers: OffersType;
  offersCard: OffersCardType;
  reviews: ReviewsType;
  authorizationStatus: AuthorizationStatus;
}

function App({activeCity, sortType, offers, offersCard, reviews, authorizationStatus}: AppProps): JSX.Element {
  const favorites = offersCard.filter(({isFavorite}) => isFavorite);

  const router = createBrowserRouter([
    {
      path: AppRoute.Main,
      element: <Layout authorizationStatus={authorizationStatus} favoritesCount={favorites.length}/>,
      children: [
        {
          index: true,
          element: <MainScreen sortType={sortType} activeCity={activeCity} offersCard={offersCard}/>,
        },
        {
          path: AppRoute.Offer,
          element: <OfferScreen offers={offers} nearOfferCards={offersCard.slice(0, 3)} reviews={reviews} authorizationStatus={authorizationStatus}/>,
        },
        {
          path: AppRoute.Favorites,
          element: <PrivateRoute authorizationStatus={authorizationStatus}><FavoritesScreen favorites={favorites}/></PrivateRoute>,
        },
        {
          path: AppRoute.Login,
          element: <PublicRoute authorizationStatus={authorizationStatus}><LoginScreen/></PublicRoute>,
        },
        {
          path: AppRoute.NotFound,
          element: <NotFoundScreen/>,
        }
      ],
      errorElement: <ErrorScreen/>
    }
  ]);

  return (
    <HelmetProvider>
      <RouterProvider router={router}/>
    </HelmetProvider>
  );
}

export default App;

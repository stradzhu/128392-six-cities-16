import {createBrowserRouter} from 'react-router-dom';
import {AppRoute} from './const';
import Layout from './components/layout/layout';
import MainScreen from './pages/main/main';
import OfferScreen from './pages/offer/offer';
import {PrivateRoute, PublicRoute} from './components/access-route/access-route';
import FavoritesScreen from './pages/favorites/favorites';
import LoginScreen from './pages/login/login';
import NotFoundScreen from './pages/not-found-screen/not-found-screen';
import ErrorScreen from './pages/error-screen/error-screen';

export const router = createBrowserRouter([
  {
    path: AppRoute.Main,
    element: <Layout/>,
    children: [
      {
        index: true,
        element: <MainScreen/>,
      },
      {
        path: AppRoute.Offer,
        element: <OfferScreen/>,
      },
      {
        path: AppRoute.Favorites,
        element: <PrivateRoute><FavoritesScreen/></PrivateRoute>,
      },
      {
        path: AppRoute.Login,
        element: <PublicRoute><LoginScreen/></PublicRoute>,
      },
      {
        path: AppRoute.NotFound,
        element: <NotFoundScreen/>,
      }
    ],
    errorElement: <ErrorScreen/>
  }
]);

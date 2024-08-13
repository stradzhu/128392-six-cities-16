import {RouterProvider, createBrowserRouter} from 'react-router-dom';
import {HelmetProvider} from 'react-helmet-async';
import {AppRoute} from '../../const';
import {PrivateRoute, PublicRoute} from '../access-route/access-route';
import Layout from '../layout/layout';
import MainScreen from '../../pages/main/main';
import FavoritesScreen from '../../pages/favorites/favorites';
import LoginScreen from '../../pages/login/login';
import OfferScreen from '../../pages/offer/offer';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';
import ErrorScreen from '../../pages/error-screen/error-screen';

function App(): JSX.Element {
  const router = createBrowserRouter([
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

  return (
    <HelmetProvider>
      <RouterProvider router={router}/>
    </HelmetProvider>
  );
}

export default App;

import {RouterProvider} from 'react-router-dom';
import {HelmetProvider} from 'react-helmet-async';
import {useActionCreators} from '../../hooks';
import LoadingScreen from '../../pages/loading/loading';
import {router} from '../../router.tsx';
import {useEffect, useState} from 'react';
import {userActions} from '../../store/slice/user.ts';
import {dataActions} from '../../store/slice/data.ts';
import './../../style.css';

function App(): JSX.Element {
  const {checkAuthAction} = useActionCreators(userActions);
  const {fetchOffersCardAction, fetchFavoritesOffersCardAction} = useActionCreators(dataActions);
  const [isDataLoaded, setDataLoaded] = useState(false);

  // TODO: нужно предусмотреть, что делать, если данные не загрузятся
  useEffect(() => {
    Promise.all([
      checkAuthAction(),
      fetchOffersCardAction(),
      fetchFavoritesOffersCardAction()
    ]).then(() => setDataLoaded(true));
  }, [checkAuthAction, fetchOffersCardAction, fetchFavoritesOffersCardAction]);

  if (!isDataLoaded) {
    return <LoadingScreen/>;
  }

  return (
    <HelmetProvider>
      <RouterProvider router={router}/>
    </HelmetProvider>
  );
}

export default App;

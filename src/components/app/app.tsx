import {RouterProvider} from 'react-router-dom';
import {HelmetProvider} from 'react-helmet-async';
import {useAppDispatch} from '../../hooks';
import LoadingScreen from '../../pages/loading/loading';
import {router} from '../../router.tsx';
import {checkAuthAction, fetchOffersCardAction} from '../../store/api-actions.ts';
import {useEffect, useState} from 'react';

function App(): JSX.Element {
  const dispatch = useAppDispatch();
  const [isDataLoaded, setDataLoaded] = useState(false);

  useEffect(() => {
    Promise.all([
      dispatch(checkAuthAction()),
      dispatch(fetchOffersCardAction())
    ]).then(() => setDataLoaded(true));
  }, [dispatch]);

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

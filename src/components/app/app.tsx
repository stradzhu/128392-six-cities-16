import {RouterProvider} from 'react-router-dom';
import {HelmetProvider} from 'react-helmet-async';
import {AuthorizationStatus} from '../../const';
import {useAppSelector} from '../../hooks';
import LoadingScreen from '../../pages/loading/loading';
import {router} from '../../router';

function App(): JSX.Element {
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
  const isDataLoading = useAppSelector((state) => state.isDataLoading);

  if (authorizationStatus === AuthorizationStatus.Unknown || isDataLoading) {
    return (
      <LoadingScreen/>
    );
  }

  return (
    <HelmetProvider>
      <RouterProvider router={router}/>
    </HelmetProvider>
  );
}

export default App;

import {RouterProvider} from 'react-router-dom';
import {HelmetProvider} from 'react-helmet-async';
import {AuthorizationStatus} from '../../const';
import {useAppSelector} from '../../hooks';
import LoadingScreen from '../../pages/loading/loading';
import {router} from '../../router.tsx';
import {getAuthorizationStatusSelector} from '../../store/user-process/user-process.selectors.ts';

function App(): JSX.Element {
  const authorizationStatus = useAppSelector(getAuthorizationStatusSelector);

  if (authorizationStatus === AuthorizationStatus.Unknown) {
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

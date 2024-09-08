import {Navigate, useLocation} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const';
import {useAppSelector} from '../../hooks';
import {userSelectors} from '../../store/slice/user.ts';

type RouteProps = {
  children: JSX.Element;
}

function PrivateRoute({children}: RouteProps): JSX.Element {
  const authorizationStatus = useAppSelector(userSelectors.authorizationStatus);
  const location = useLocation();
  return authorizationStatus === AuthorizationStatus.Auth ? children : <Navigate to={AppRoute.Login} state={{from: location}} replace />;
}

function PublicRoute({children}: RouteProps): JSX.Element {
  const authorizationStatus = useAppSelector(userSelectors.authorizationStatus);
  const location = useLocation();
  return authorizationStatus === AuthorizationStatus.NoAuth ? children : <Navigate to={AppRoute.Main} state={{from: location}} replace />;
}

export { PrivateRoute, PublicRoute };

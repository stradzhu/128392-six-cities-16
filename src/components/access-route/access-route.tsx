import {Navigate, useLocation} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const';

type RouteProps = {
  children: JSX.Element;
  authorizationStatus: AuthorizationStatus;
}

function PrivateRoute({children, authorizationStatus}: RouteProps): JSX.Element {
  const location = useLocation();
  return authorizationStatus === AuthorizationStatus.Auth ? children : <Navigate to={AppRoute.Login} state={{from: location}} replace />;
}

function PublicRoute({children, authorizationStatus}: RouteProps): JSX.Element {
  const location = useLocation();
  return authorizationStatus === AuthorizationStatus.NoAuth ? children : <Navigate to={AppRoute.Main} state={{from: location}} replace />;
}

export { PrivateRoute, PublicRoute };

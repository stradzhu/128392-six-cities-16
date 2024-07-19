import {Navigate, useLocation} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const';

type RequireAuthProps = {
  children: JSX.Element;
  authorizationStatus: AuthorizationStatus;
}

function RequireAuth({children, authorizationStatus}: RequireAuthProps): JSX.Element {
  const location = useLocation();
  return authorizationStatus === AuthorizationStatus.Auth ? children : <Navigate to={AppRoute.Login} state={{from: location}} replace />;
}

export default RequireAuth;

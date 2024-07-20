import {NavLink, Outlet, useLocation} from 'react-router-dom';
import Header from '../header/header';
import {AppRoute, AuthorizationStatus} from '../../const';

type LayoutProps = {
  favoritesCount: number;
  authorizationStatus: AuthorizationStatus;
}

function Layout({favoritesCount, authorizationStatus}: LayoutProps): JSX.Element {
  const location = useLocation();
  const pageClasses = ['page'];

  if (location.pathname === String(AppRoute.Favorites) && !favoritesCount) {
    pageClasses.push('page--favorites-empty');
  } else if (location.pathname === String(AppRoute.Login)) {
    pageClasses.push('page--gray');
    pageClasses.push('page--login');
  } else if (location.pathname === String(AppRoute.Main)) {
    pageClasses.push('page--gray');
    pageClasses.push('page--main');
  }

  return (
    <div className={pageClasses.join(' ')}>
      <Header favoritesCount={favoritesCount} authorizationStatus={authorizationStatus} />
      <Outlet/>
      {location.pathname === String(AppRoute.Favorites) &&
        <footer className="footer container">
          <NavLink to={AppRoute.Main} className={() => 'footer__logo-link'}>
            <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33" />
          </NavLink>
        </footer>}
    </div>
  );
}

export default Layout;

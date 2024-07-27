import {AppRoute, AuthorizationStatus} from '../../const';
import {Link, NavLink, useLocation} from 'react-router-dom';
import {clsx} from 'clsx';

type HeaderProps = {
  favoritesCount: number;
  authorizationStatus: AuthorizationStatus;
}

function HeaderNav({favoritesCount, authorizationStatus}: HeaderProps): JSX.Element {
  return (
    <nav className="header__nav">
      <ul className="header__nav-list">
        <li className="header__nav-item user">
          {authorizationStatus === AuthorizationStatus.Auth ?
            <Link to={AppRoute.Favorites} className="header__nav-link header__nav-link--profile">
              <div className="header__avatar-wrapper user__avatar-wrapper"/>
              <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
              <span className="header__favorite-count">{favoritesCount}</span>
            </Link>
            :
            <Link to={AppRoute.Login} className="header__nav-link header__nav-link--profile">
              <div className="header__avatar-wrapper user__avatar-wrapper"></div>
              <span className="header__login">Sign in</span>
            </Link>}
        </li>
        {authorizationStatus === AuthorizationStatus.Auth &&
          <li className="header__nav-item">
            <Link to='/' className="header__nav-link">
              <span className="header__signout">Sign out</span>
            </Link>
          </li>}
      </ul>
    </nav>
  );
}

function Header({favoritesCount, authorizationStatus}: HeaderProps): JSX.Element {
  const location = useLocation();

  // throw new Error('Test error');

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <NavLink to={AppRoute.Main} className={({isActive}) => clsx('header__logo-link', {'header__logo-link--active': isActive})}>
              <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
            </NavLink>
          </div>
          {/* TODO: разобраться с ошибкой, если сравнивать так: location.pathname !== AppRoute.Login */}
          {location.pathname !== String(AppRoute.Login) && <HeaderNav favoritesCount={favoritesCount} authorizationStatus={authorizationStatus}/>}
        </div>
      </div>
    </header>
  );
}

export default Header;

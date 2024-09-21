import {AppRoute, AuthorizationStatus} from '../../const';
import {Link, NavLink, useLocation} from 'react-router-dom';
import {clsx} from 'clsx';
import {useActionCreators, useAppSelector} from '../../hooks';
import {userActions, userSelectors} from '../../store/slice/user.ts';

type HeaderProps = {
  favoritesCount: number;
}

function HeaderNav({favoritesCount}: HeaderProps): JSX.Element {
  const authorizationStatus = useAppSelector(userSelectors.authorizationStatus);
  const user = useAppSelector(userSelectors.user);
  const {logoutAction} = useActionCreators(userActions);

  return (
    <nav className="header__nav">
      <ul className="header__nav-list">
        <li className="header__nav-item user">
          {authorizationStatus === AuthorizationStatus.Auth && user ?
            <Link to={AppRoute.Favorites} className="header__nav-link header__nav-link--profile">
              <div className="header__avatar-wrapper user__avatar-wrapper" style={{backgroundImage: `url('${user.avatarUrl}')`, borderRadius: '50%'}}/>
              <span className="header__user-name user__name">{user.name}</span>
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
            <Link onClick={(event) => {
              event.preventDefault();
              logoutAction();
            }} to='#' className="header__nav-link"
            >
              <span className="header__signout">Sign out</span>
            </Link>
          </li>}
      </ul>
    </nav>
  );
}

function Header({favoritesCount}: HeaderProps): JSX.Element {
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
          {location.pathname !== String(AppRoute.Login) && <HeaderNav favoritesCount={favoritesCount}/>}
        </div>
      </div>
    </header>
  );
}

export default Header;

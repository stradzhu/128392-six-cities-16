import {Helmet} from 'react-helmet-async';
import {Link, useRouteError} from 'react-router-dom';

function ErrorScreen(): JSX.Element {
  const error: unknown = useRouteError();
  return (
    <main className="page__main page__main--index page__main--index-empty">
      <Helmet>
        <title>6 cities: error</title>
      </Helmet>
      <div className="cities">
        <div className="cities__places-container cities__places-container--empty container">
          <div className="cities__status-wrapper tabs__content">
            <b className="cities__status">{(error as Error)?.message}</b>
            <pre style={{textAlign: 'left'}}>{(error as Error)?.stack}</pre>
            <hr/>
            <p className="cities__status-description">
              <Link to='/'>
                <img src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
              </Link>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default ErrorScreen;

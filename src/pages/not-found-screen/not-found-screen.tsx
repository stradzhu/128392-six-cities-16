import {Link} from 'react-router-dom';

function NotFoundScreen(): JSX.Element {
  return (
    <div className="page page--gray page--main">
      <main className="page__main page__main--index page__main--index-empty">
        <div className="cities">
          <div className="cities__places-container cities__places-container--empty container">
            <div className="cities__status-wrapper tabs__content">
              <b className="cities__status">Страница не найдена</b>
              <p className="cities__status-description">
                Возможно она была, но исчезла из-за катастрофически быстрого сжатия под воздействием гравитационных сил.
                <br/> Но это ещё не точно.
              </p>
              <hr />
              <p className="cities__status-description">
                <Link to='/'>
                  <img src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
                </Link>
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default NotFoundScreen;

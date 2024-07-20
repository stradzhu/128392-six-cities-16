import {Helmet} from 'react-helmet-async';
import {CardType} from '../../const';
import Main from '../../components/main/main';
import MainEmpty from '../../components/main-empty/main-empty';

type MainProps = {
  offersCount: number;
  cards: CardType[];
}

function MainScreen({offersCount, cards}: MainProps): JSX.Element {
  return (
    <main className={`page__main page__main--index ${offersCount ? '' : 'page__main--index-empty'}`}>
      <Helmet>
        <title>6 cities</title>
      </Helmet>
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <section className="locations container">
          <ul className="locations__list tabs__list">
            <li className="locations__item">
              <a className="locations__item-link tabs__item" href="#">
                <span>Paris</span>
              </a>
            </li>
            <li className="locations__item">
              <a className="locations__item-link tabs__item" href="#">
                <span>Cologne</span>
              </a>
            </li>
            <li className="locations__item">
              <a className="locations__item-link tabs__item" href="#">
                <span>Brussels</span>
              </a>
            </li>
            <li className="locations__item">
              <a className="locations__item-link tabs__item tabs__item--active">
                <span>Amsterdam</span>
              </a>
            </li>
            <li className="locations__item">
              <a className="locations__item-link tabs__item" href="#">
                <span>Hamburg</span>
              </a>
            </li>
            <li className="locations__item">
              <a className="locations__item-link tabs__item" href="#">
                <span>Dusseldorf</span>
              </a>
            </li>
          </ul>
        </section>
      </div>
      <div className="cities">
        {offersCount ? <Main offersCount={offersCount} cards={cards}/> : <MainEmpty/>}
      </div>
    </main>
  );
}

export default MainScreen;

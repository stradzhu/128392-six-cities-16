import {Helmet} from 'react-helmet-async';
import {OffersCardType} from '../../types/offer';
import Main from '../../components/main/main';
import MainEmpty from '../../components/main-empty/main-empty';
import CityList from '../../components/city-list/city-list';
import {ALL_CITY_LIST, SortTypes} from '../../const';

type MainProps = {
  offersCard: OffersCardType;
  activeCity: typeof ALL_CITY_LIST[number];
  sortType: typeof SortTypes[keyof typeof SortTypes];
}

function MainScreen({activeCity, sortType, offersCard}: MainProps): JSX.Element {


  return (
    <main className={`page__main page__main--index ${offersCard.length ? '' : 'page__main--index-empty'}`}>
      <Helmet>
        <title>6 cities</title>
      </Helmet>
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <CityList activeCity={activeCity}/>
      </div>
      <div className="cities">
        {offersCard.length ? <Main sortType={sortType} offersCard={offersCard}/> : <MainEmpty/>}
      </div>
    </main>
  );
}

export default MainScreen;

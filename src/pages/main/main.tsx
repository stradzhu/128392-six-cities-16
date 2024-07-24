import {Helmet} from 'react-helmet-async';
import {OffersType} from '../../types/offer';
import Main from '../../components/main/main';
import MainEmpty from '../../components/main-empty/main-empty';
import CityList from '../../components/city-list/city-list';

type MainProps = {
  offers: OffersType;
}

function MainScreen({offers}: MainProps): JSX.Element {
  return (
    <main className={`page__main page__main--index ${offers.length ? '' : 'page__main--index-empty'}`}>
      <Helmet>
        <title>6 cities</title>
      </Helmet>
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <CityList/>
      </div>
      <div className="cities">
        {offers.length ? <Main offers={offers}/> : <MainEmpty/>}
      </div>
    </main>
  );
}

export default MainScreen;

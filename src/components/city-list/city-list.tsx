import {AllCityList} from '../../const';
import {Link} from 'react-router-dom';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {mainActions, mainSelectors} from '../../store/slice/main.ts';

function CityList(): JSX.Element {
  const activeCity = useAppSelector(mainSelectors.activeCity);
  const dispatch = useAppDispatch();

  const handleChangeCity = (city: typeof AllCityList[number]) => {
    if (city !== activeCity) {
      dispatch(mainActions.changeCityAction(city));
    }
  };

  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {AllCityList.map((city) => (
          <li key={city} className="locations__item">
            <Link to="#" onClick={() => handleChangeCity(city)}
              className={`locations__item-link tabs__item ${city === activeCity ? 'tabs__item--active' : ''}`}
            >
              <span>{city}</span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default CityList;

import {AllCityList} from '../../const';
import {Link} from 'react-router-dom';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {changeCityAction} from '../../store/action';

function CityList(): JSX.Element {
  const activeCity = useAppSelector((state) => state.activeCity);
  const dispatch = useAppDispatch();

  const handleChangeCity = (city: typeof AllCityList[number]) => {
    if (city !== activeCity) {
      dispatch(changeCityAction(city));
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

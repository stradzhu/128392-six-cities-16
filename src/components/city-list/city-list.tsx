import {ALL_CITY_LIST} from '../../const';
import {Link} from 'react-router-dom';
import {useState} from 'react';

type CityListProps = {
  activeCity: typeof ALL_CITY_LIST[number];
}

function CityList({activeCity}: CityListProps): JSX.Element {
  const [activeCityName, setActiveCityName] = useState(activeCity);

  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {ALL_CITY_LIST.map((city) => (
          <li key={city} className="locations__item">
            <Link to="#" onClick={() => (city !== activeCityName && setActiveCityName(city))}
              className={`locations__item-link tabs__item ${city === activeCityName ? 'tabs__item--active' : ''}`}
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

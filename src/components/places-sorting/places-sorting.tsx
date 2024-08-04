import {useState} from 'react';
import {SortTypes} from '../../const';

type PlacesSortingProps = {
  sortType: typeof SortTypes[keyof typeof SortTypes];
}


function PlacesSorting({sortType}: PlacesSortingProps): JSX.Element {
  const [isOpenSort, setOpenSort] = useState(false);
  const [currentSortType, setSortType] = useState(sortType);

  const handleToggleSort = () => {
    setOpenSort(!isOpenSort);
  };

  const handleClickItemSort = (type: typeof SortTypes[keyof typeof SortTypes]) => {
    setSortType(type);
    setOpenSort(!isOpenSort);
  };

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by </span>
      <span className="places__sorting-type" tabIndex={0} onClick={handleToggleSort}>
        {currentSortType}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={`places__options places__options--custom ${isOpenSort && 'places__options--opened'}`}>
        {Object.values(SortTypes).map((item) => (
          <li key={item} className={`places__option ${currentSortType === item && 'places__option--active'}`}
            tabIndex={0} onClick={() => handleClickItemSort(item)}
          >
            {item}
          </li>
        ))}
      </ul>
    </form>
  );
}

export default PlacesSorting;

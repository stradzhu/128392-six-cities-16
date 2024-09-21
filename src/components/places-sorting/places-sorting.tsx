import {memo, useState} from 'react';
import {SortTypes} from '../../const';
import {useActionCreators, useAppSelector} from '../../hooks';
import {mainActions, mainSelectors} from '../../store/slice/main.ts';

function PlacesSorting(): JSX.Element {
  const [isOpenSort, setOpenSort] = useState(false);
  const sortType = useAppSelector(mainSelectors.sortType);
  const {changeSortTypeAction} = useActionCreators(mainActions);

  const handleToggleSort = () => {
    setOpenSort(!isOpenSort);
  };

  const handleClickItemSort = (type: typeof SortTypes[keyof typeof SortTypes]) => {
    changeSortTypeAction(type);
    setOpenSort(!isOpenSort);
  };

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by </span>
      <span className="places__sorting-type" tabIndex={0} onClick={handleToggleSort}>
        {sortType}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={`places__options places__options--custom ${isOpenSort && 'places__options--opened'}`}>
        {Object.values(SortTypes).map((item) => (
          <li key={item} className={`places__option ${sortType === item && 'places__option--active'}`}
            tabIndex={0} onClick={() => handleClickItemSort(item)}
          >
            {item}
          </li>
        ))}
      </ul>
    </form>
  );
}

const PlacesSortingMemo = memo(PlacesSorting);

export default PlacesSortingMemo;

import {ReducerName} from '../../const.ts';
import {StateType} from '../../types/state.ts';

export const getActiveCitySelector = (state: StateType) => state[ReducerName.Main].activeCity;
export const getSortTypeSelector = (state: StateType) => state[ReducerName.Main].sortType;

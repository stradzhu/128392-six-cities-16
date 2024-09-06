import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {AllCityList, DEFAULT_CITY, DEFAULT_SORT_TYPE, ReducerName, SortTypes} from '../../const.ts';
import {MainProcessType} from '../../types/state.ts';

const initialState: MainProcessType = {
  activeCity: DEFAULT_CITY,
  sortType: DEFAULT_SORT_TYPE,
};

export const mainProcessSlice = createSlice({
  name: ReducerName.Main,
  initialState,
  reducers: {
    changeCityAction: (state, action: PayloadAction<typeof AllCityList[number]>) => {
      state.activeCity = action.payload;
    },
    changeSortTypeAction: (state, action: PayloadAction<typeof SortTypes[keyof typeof SortTypes]>) => {
      state.sortType = action.payload;
    }
  }
});

export const {changeCityAction, changeSortTypeAction} = mainProcessSlice.actions;

import {combineReducers} from '@reduxjs/toolkit';
import {ReducerName} from '../const';
import {dataProcessSlice} from './data-process/data-process.slice.ts';
import {mainProcessSlice} from './main-process/main-process.slice.ts';
import {userProcessSlice} from './user-process/user-process.slice.ts';

export const rootReducer = combineReducers({
  [ReducerName.Data]: dataProcessSlice.reducer,
  [ReducerName.Main]: mainProcessSlice.reducer,
  [ReducerName.User]: userProcessSlice.reducer,
});

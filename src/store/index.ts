import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {createAPI} from '../services/api';
import {ReducerName} from '../const.ts';
import {dataSlice} from './slice/data.ts';
import {mainSlice} from './slice/main.ts';
import {userSlice} from './slice/user.ts';

const rootReducer = combineReducers({
  [ReducerName.Data]: dataSlice.reducer,
  [ReducerName.Main]: mainSlice.reducer,
  [ReducerName.User]: userSlice.reducer,
});

const api = createAPI();

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }),
});

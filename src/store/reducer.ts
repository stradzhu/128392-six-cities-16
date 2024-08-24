import {createReducer} from '@reduxjs/toolkit';
import {
  addReviewAction,
  changeCityAction,
  changeSortTypeAction,
  loadOffersCard,
  requireAuthorization,
  setDataLoading, setUserAuthData
} from './action';
import {AuthorizationStatus, DEFAULT_CITY, DEFAULT_SORT_TYPE} from '../const';
import {offers} from '../mocks/offers';
import {reviews} from '../mocks/reviews';
import {StateType} from '../types/state';

const initialState: StateType = {
  activeCity: DEFAULT_CITY,
  sortType: DEFAULT_SORT_TYPE,
  authorizationStatus: AuthorizationStatus.Unknown,
  offersCard: [],
  offers,
  reviews,
  isDataLoading: true,
  user: null
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCityAction, (state, action) => {
      state.activeCity = action.payload;
    })
    .addCase(changeSortTypeAction, (state, action) => {
      state.sortType = action.payload;
    })
    .addCase(addReviewAction, (state, action) => {
      state.reviews.push(action.payload);
    })
    .addCase(loadOffersCard, (state, action) => {
      state.offersCard = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setDataLoading, (state, action) => {
      state.isDataLoading = action.payload;
    })
    .addCase(setUserAuthData, (state, action) => {
      state.user = action.payload;
    });
});

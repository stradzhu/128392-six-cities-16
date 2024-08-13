import {createReducer} from '@reduxjs/toolkit';
import {addReviewAction, changeCityAction, changeSortTypeAction} from './action';
import {DEFAULT_CITY, DEFAULT_SORT_TYPE} from '../const';
import {offersCard} from '../mocks/offers-card';
import {offers} from '../mocks/offers';
import {authorizationStatus} from '../mocks/authorization-status';
import {reviews} from '../mocks/reviews';
import {StateType} from '../types/state';

const initialState: StateType = {
  activeCity: DEFAULT_CITY,
  sortType: DEFAULT_SORT_TYPE,
  authorizationStatus,
  offersCard,
  offers,
  reviews
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
    });
});

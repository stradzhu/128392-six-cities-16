import {createReducer} from '@reduxjs/toolkit';
import {
  addReviewAction,
  changeCityAction,
  changeSortTypeAction, loadNearOffersCardAction, loadOfferAction,
  loadOffersCardAction, loadReviewsAction,
  requireAuthorizationAction,
  setUserAuthDataAction
} from './action';
import {AuthorizationStatus, DEFAULT_CITY, DEFAULT_SORT_TYPE} from '../const';
import {StateType} from '../types/state';

const initialState: StateType = {
  activeCity: DEFAULT_CITY,
  sortType: DEFAULT_SORT_TYPE,
  authorizationStatus: AuthorizationStatus.Unknown,
  offersCard: [],
  offer: null,
  nearOffersCard: [],
  reviews: [],
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
    .addCase(loadOffersCardAction, (state, action) => {
      state.offersCard = action.payload;
    })
    .addCase(requireAuthorizationAction, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setUserAuthDataAction, (state, action) => {
      state.user = action.payload;
    })
    .addCase(loadOfferAction, (state, action) => {
      state.offer = action.payload;
    })
    .addCase(loadNearOffersCardAction, (state, action) => {
      state.nearOffersCard = action.payload;
    })
    .addCase(loadReviewsAction, (state, action) => {
      state.reviews = action.payload;
    });
});

import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {DataProcessType} from '../../types/state.ts';
import {ReducerName} from '../../const.ts';
import {
  fetchNearOffersCardAction,
  fetchOfferAction,
  fetchOffersCardAction,
  fetchReviewsAction,
  sendReviewAction
} from '../thunk/data.ts';
import {ReviewsType, ReviewType} from '../../types/review.ts';
import {OffersCardType, OfferType} from '../../types/offer.ts';

const initialState: DataProcessType = {
  offersCard: [],
  offer: null,
  nearOffersCard: [],
  reviews: [],
};

export const dataSlice = createSlice({
  name: ReducerName.Data,
  initialState,
  reducers: {},
  extraReducers (builder) {
    builder
      .addCase(fetchOffersCardAction.fulfilled, (state, action: PayloadAction<OffersCardType>) => {
        state.offersCard = action.payload;
      })
      .addCase(fetchOfferAction.fulfilled, (state, action: PayloadAction<OfferType>) => {
        state.offer = action.payload;
      })
      .addCase(fetchNearOffersCardAction.fulfilled, (state, action: PayloadAction<OffersCardType>) => {
        state.nearOffersCard = action.payload;
      })
      .addCase(fetchReviewsAction.fulfilled, (state, action: PayloadAction<ReviewsType>) => {
        state.reviews = action.payload;
      })
      .addCase(sendReviewAction.fulfilled, (state, action: PayloadAction<ReviewType>) => {
        state.reviews.push(action.payload);
      });
  },
  selectors: {
    offersCard: (state) => state.offersCard,
    offer: (state) => state.offer,
    nearOffersCard: (state) => state.nearOffersCard,
    reviews: (state) => state.reviews
  }
});

export const dataSelectors = dataSlice.selectors;

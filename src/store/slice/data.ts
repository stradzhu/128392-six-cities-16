import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {DataProcessType} from '../../types/state.ts';
import {ReducerName} from '../../const.ts';
import {
  fetchNearOffersCardAction,
  fetchOfferAction,
  fetchOffersCardAction,
  fetchReviewsAction,
  sendReviewAction,
  fetchFavoritesOffersCardAction,
  changeFavoriteOfferCardAction
} from '../thunk/data.ts';
import {ReviewsType, ReviewType} from '../../types/review.ts';
import {OfferCardType, OffersCardType, OfferType} from '../../types/offer.ts';

const initialState: DataProcessType = {
  offersCard: [],
  offer: null,
  nearOffersCard: [],
  reviews: [],
  favorites: [],
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
      })
      .addCase(fetchFavoritesOffersCardAction.fulfilled, (state, action: PayloadAction<OffersCardType>) => {
        state.favorites = action.payload;
      })
      .addCase(changeFavoriteOfferCardAction.fulfilled, (state, action: PayloadAction<OfferCardType>) => {
        state.offersCard.map((offer) => {
          if (offer.id === action.payload.id) {
            offer.isFavorite = action.payload.isFavorite;
          }
          return offer;
        });

        if (state.offer && state.offer.id === action.payload.id) {
          state.offer.isFavorite = action.payload.isFavorite;
        }

        if (action.payload.isFavorite) {
          state.favorites.push(action.payload);
        } else {
          state.favorites = state.favorites.filter((offerCard) => offerCard.id !== action.payload.id);
        }
      });
  },
  selectors: {
    offersCard: (state) => state.offersCard,
    offer: (state) => state.offer,
    nearOffersCard: (state) => state.nearOffersCard,
    reviews: (state) => state.reviews,
    favorites: (state) => state.favorites,
  }
});

export const dataSelectors = dataSlice.selectors;

export const dataActions = {
  ...dataSlice.actions,
  fetchOffersCardAction,
  fetchOfferAction,
  fetchNearOffersCardAction,
  fetchReviewsAction,
  sendReviewAction,
  fetchFavoritesOffersCardAction,
  changeFavoriteOfferCardAction
};

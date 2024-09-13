import {createAsyncThunk} from '@reduxjs/toolkit';
import {OfferCardType, OffersCardType, OfferType} from '../../types/offer.ts';
import {AppDispatch, StateType} from '../../types/state.ts';
import {AxiosInstance} from 'axios';
import {APIRoute} from '../../const.ts';
import {ReviewNewType, ReviewsType, ReviewType} from '../../types/review.ts';
// import {sleep} from '../../utils.ts';

export const fetchOffersCardAction = createAsyncThunk<OffersCardType, void, {
  dispatch: AppDispatch;
  state: StateType;
  extra: AxiosInstance;
}>(
  'data/fetchOffersCard',
  async (_arg, {extra: api}) => {
    const {data} = await api.get<OffersCardType>(APIRoute.Offers);
    return data;
  }
);


export const fetchOfferAction = createAsyncThunk<OfferType, string, {
  dispatch: AppDispatch;
  state: StateType;
  extra: AxiosInstance;
}>(
  'data/fetchOffer',
  async (payload, {extra: api}) => {
    const {data} = await api.get<OfferType>(`${APIRoute.Offers}/${payload}`);
    return data;
  }
);

export const fetchNearOffersCardAction = createAsyncThunk<OffersCardType, string, {
  dispatch: AppDispatch;
  state: StateType;
  extra: AxiosInstance;
}>(
  'data/fetchNearOffersCard',
  async (payload, {extra: api}) => {
    const {data} = await api.get<OffersCardType>(`${APIRoute.Offers}/${payload}/nearby`);
    return data;
  }
);


export const fetchReviewsAction = createAsyncThunk<ReviewsType, string, {
  dispatch: AppDispatch;
  state: StateType;
  extra: AxiosInstance;
}>(
  'data/fetchReviews',
  async (payload, {extra: api}) => {
    const {data} = await api.get<ReviewsType>(`${APIRoute.Reviews}/${payload}`);
    return data;
  }
);

export const sendReviewAction = createAsyncThunk<ReviewType, ReviewNewType, {
  dispatch: AppDispatch;
  state: StateType;
  extra: AxiosInstance;
}>(
  'data/sendReview',
  async (reviewNew, {extra: api}) => {
    const {data} = await api.post<ReviewType>(`${APIRoute.Reviews}/${reviewNew.offerId}`,reviewNew.body);
    return data;
  }
);

export const fetchFavoritesOffersCardAction = createAsyncThunk<OffersCardType, void, {
  dispatch: AppDispatch;
  state: StateType;
  extra: AxiosInstance;
}>(
  'data/fetchFavoritesOffersCard',
  async (_arg, {extra: api}) => {
    const {data} = await api.get<OffersCardType>(APIRoute.Favorite);
    return data;
  }
);

export const changeFavoriteOfferCardAction = createAsyncThunk<OfferCardType, {offerId: string; status: number}, {
  dispatch: AppDispatch;
  state: StateType;
  extra: AxiosInstance;
}>(
  'data/changeFavoriteOfferCard',
  async ({offerId, status}, {extra: api}) => {
    // await sleep(3000); // Задержка для теста
    const {data} = await api.post<OfferCardType>(`${APIRoute.Favorite}/${offerId}/${status}`);
    return data;
  }
);

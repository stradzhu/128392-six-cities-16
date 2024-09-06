import {AxiosInstance} from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {AppDispatch, StateType} from '../types/state';
import {APIRoute} from '../const';
import {AuthData} from '../types/auth-data';
import {UserAuthType} from '../types/user';
import {OffersCardType, OfferType} from '../types/offer';
import {ReviewsType, ReviewNewType, ReviewType} from '../types/review';

export const fetchOffersCardAction = createAsyncThunk<OffersCardType, undefined, {
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

export const checkAuthAction = createAsyncThunk<UserAuthType, undefined, {
  dispatch: AppDispatch;
  state: StateType;
  extra: AxiosInstance;
}>(
  'user/checkAuth',
  async (_arg, {extra: api}) => {
    const {data} = await api.get<UserAuthType>(APIRoute.Login);
    return data;
  }
);

export const loginAction = createAsyncThunk<UserAuthType, AuthData, {
  dispatch: AppDispatch;
  state: StateType;
  extra: AxiosInstance;
}>(
  'user/login',
  async ({login: email, password}, {extra: api}) => {
    const {data} = await api.post<UserAuthType>(APIRoute.Login, {email, password});
    return data;
  }
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: StateType;
  extra: AxiosInstance;
}>(
  'user/logout',
  async (_arg, {extra: api}) => {
    await api.delete(APIRoute.Logout);
  }
);

import {AxiosInstance} from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {AppDispatch, StateType} from '../types/state';
import {
  addReviewAction,
  loadNearOffersCardAction, loadOfferAction,
  loadOffersCardAction, loadReviewsAction,
  requireAuthorizationAction,
  setUserAuthDataAction
} from './action';
import {saveToken, dropToken} from '../services/token';
import {APIRoute, AuthorizationStatus, AppRoute} from '../const';
import {AuthData} from '../types/auth-data';
import {UserAuthType} from '../types/user';
import {OffersCardType, OfferType} from '../types/offer';
import {router} from '../router';
import {ReviewsType, ReviewNewType, ReviewType} from '../types/review';

export const fetchOffersCardAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: StateType;
  extra: AxiosInstance;
}>(
  'data/fetchOffersCard',
  async (_arg, {dispatch, extra: api}) => {
    const {data} = await api.get<OffersCardType>(APIRoute.Offers);
    dispatch(loadOffersCardAction(data));
  }
);

export const fetchNearOffersCardAction = createAsyncThunk<void, string, {
  dispatch: AppDispatch;
  state: StateType;
  extra: AxiosInstance;
}>(
  'data/fetchNearOffersCard',
  async (payload, {dispatch, extra: api}) => {
    const {data} = await api.get<OffersCardType>(`${APIRoute.Offers}/${payload}/nearby`);
    dispatch(loadNearOffersCardAction(data));
  }
);

export const fetchOfferAction = createAsyncThunk<void, string, {
  dispatch: AppDispatch;
  state: StateType;
  extra: AxiosInstance;
}>(
  'data/fetchOffer',
  async (payload, {dispatch, extra: api}) => {
    const {data} = await api.get<OfferType>(`${APIRoute.Offers}/${payload}`);
    dispatch(loadOfferAction(data));
  }
);

export const fetchReviewsAction = createAsyncThunk<void, string, {
  dispatch: AppDispatch;
  state: StateType;
  extra: AxiosInstance;
}>(
  'data/fetchReviews',
  async (payload, {dispatch, extra: api}) => {
    const {data} = await api.get<ReviewsType>(`${APIRoute.Reviews}/${payload}`);
    dispatch(loadReviewsAction(data));
  }
);

export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: StateType;
  extra: AxiosInstance;
}>(
  'user/checkAuth',
  async (_arg, {dispatch, extra: api}) => {
    try {
      const {data} = await api.get<UserAuthType>(APIRoute.Login);
      dispatch(setUserAuthDataAction(data));
      dispatch(requireAuthorizationAction(AuthorizationStatus.Auth));
    } catch {
      dispatch(requireAuthorizationAction(AuthorizationStatus.NoAuth));
    }
  }
);

export const loginAction = createAsyncThunk<void, AuthData, {
  dispatch: AppDispatch;
  state: StateType;
  extra: AxiosInstance;
}>(
  'user/login',
  async ({login: email, password}, {dispatch, extra: api}) => {
    const {data} = await api.post<UserAuthType>(APIRoute.Login, {email, password});
    saveToken(data.token);
    dispatch(requireAuthorizationAction(AuthorizationStatus.Auth));
    dispatch(setUserAuthDataAction(data));
    router.navigate(AppRoute.Main);
  }
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: StateType;
  extra: AxiosInstance;
}>(
  'user/logout',
  async (_arg, {dispatch, extra: api}) => {
    await api.delete(APIRoute.Logout);
    dropToken();
    dispatch(requireAuthorizationAction(AuthorizationStatus.NoAuth));
  }
);

export const sendReviewAction = createAsyncThunk<void, ReviewNewType, {
  dispatch: AppDispatch;
  state: StateType;
  extra: AxiosInstance;
}>(
  'data/sendReview',
  async (reviewNew, {dispatch, extra: api}) => {
    const {data} = await api.post<ReviewType>(`${APIRoute.Reviews}/${reviewNew.offerId}`,reviewNew.body);
    dispatch(addReviewAction(data));
  }
);


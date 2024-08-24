import {AxiosInstance} from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {AppDispatch, StateType} from '../types/state';
import {loadOffersCard, requireAuthorization, setDataLoading, setUserAuthData} from './action';
import {saveToken, dropToken} from '../services/token';
import {APIRoute, AuthorizationStatus, AppRoute} from '../const';
import {AuthData} from '../types/auth-data';
import {UserAuthType} from '../types/user';
import {OffersCardType} from '../types/offer';
import {router} from '../router';

export const fetchOffersCardAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: StateType;
  extra: AxiosInstance;
}>(
  'data/fetchOffersCard',
  (_arg, {dispatch, extra: api}) => {
    dispatch(setDataLoading(true));
    api.get<OffersCardType>(APIRoute.Offers).then(({data}) => {
      dispatch(loadOffersCard(data));
    }).finally(() => {
      dispatch(setDataLoading(false));
    });
  }
);

export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: StateType;
  extra: AxiosInstance;
}>(
  'user/checkAuth',
  (_arg, {dispatch, extra: api}) => {
    api.get<UserAuthType>(APIRoute.Login).then(({data}) => {
      dispatch(setUserAuthData(data));
      dispatch(requireAuthorization(AuthorizationStatus.Auth));
    }, () => {
      dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    });
  },
);

export const loginAction = createAsyncThunk<void, AuthData, {
  dispatch: AppDispatch;
  state: StateType;
  extra: AxiosInstance;
}>(
  'user/login',
  ({login: email, password}, {dispatch, extra: api}) => {
    dispatch(setDataLoading(true));
    api.post<UserAuthType>(APIRoute.Login, {email, password}).then(({data}) => {
      saveToken(data.token);
      dispatch(requireAuthorization(AuthorizationStatus.Auth));
      dispatch(setUserAuthData(data));
      router.navigate(AppRoute.Main);
    }).finally(() => {
      dispatch(setDataLoading(false));
    });
  }
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: StateType;
  extra: AxiosInstance;
}>(
  'user/logout',
  (_arg, {dispatch, extra: api}) => {
    api.delete(APIRoute.Logout).then(() => {
      dropToken();
      dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    });
  },
);


import {createAsyncThunk} from '@reduxjs/toolkit';
import {UserAuthType} from '../../types/user.ts';
import {AppDispatch, StateType} from '../../types/state.ts';
import {AxiosInstance} from 'axios';
import {APIRoute} from '../../const.ts';
import {AuthData} from '../../types/auth-data.ts';

export const checkAuthAction = createAsyncThunk<UserAuthType, void, {
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

export const logoutAction = createAsyncThunk<void, void, {
  dispatch: AppDispatch;
  state: StateType;
  extra: AxiosInstance;
}>(
  'user/logout',
  async (_arg, {extra: api}) => {
    await api.delete(APIRoute.Logout);
  }
);

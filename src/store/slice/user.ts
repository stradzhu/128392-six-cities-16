import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {UserProcessType} from '../../types/state.ts';
import {AppRoute, AuthorizationStatus, ReducerName} from '../../const.ts';
import {checkAuthAction, loginAction, logoutAction} from '../thunk/user.ts';
import {UserAuthType} from '../../types/user.ts';
import {router} from '../../router.tsx';
import {dropToken, saveToken} from '../../services/token.ts';

const initialState: UserProcessType = {
  authorizationStatus: AuthorizationStatus.Unknown,
  user: null
};

export const userSlice = createSlice({
  name: ReducerName.User,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(checkAuthAction.fulfilled, (state, action: PayloadAction<UserAuthType>) => {
        state.authorizationStatus = AuthorizationStatus.Auth;
        state.user = action.payload;
      })
      .addCase(checkAuthAction.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      })
      .addCase(loginAction.fulfilled, (state, action: PayloadAction<UserAuthType>) => {
        state.authorizationStatus = AuthorizationStatus.Auth;
        state.user = action.payload;
        saveToken(action.payload.token);
        router.navigate(AppRoute.Main);
      })
      .addCase(loginAction.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      })
      .addCase(logoutAction.fulfilled, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
        state.user = null;
        dropToken();
      });
  },
  selectors: {
    authorizationStatus: (state) => state.authorizationStatus,
    user: (state) => state.user
  }
});

export const userSelectors = userSlice.selectors;

export const userActions = {...userSlice.actions, checkAuthAction, loginAction, logoutAction};

import {ReducerName} from '../../const.ts';
import {StateType} from '../../types/state.ts';

export const getAuthorizationStatusSelector = (state: StateType) => state[ReducerName.User].authorizationStatus;
export const getUserSelector = (state: StateType) => state[ReducerName.User].user;

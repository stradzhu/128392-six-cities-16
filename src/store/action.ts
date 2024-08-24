import {createAction} from '@reduxjs/toolkit';
import {AllCityList, AuthorizationStatus, SortTypes} from '../const';
import {ReviewType} from '../types/review';
import {OffersCardType} from '../types/offer';
import {UserAuthType} from '../types/user';

export const changeCityAction = createAction<typeof AllCityList[number]>('main/changeCity');

export const changeSortTypeAction = createAction<typeof SortTypes[keyof typeof SortTypes]>('main/changeSortType');

export const addReviewAction = createAction<ReviewType>('addReview');

export const loadOffersCard = createAction<OffersCardType>('data/loadOffersCard');

export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');

export const setDataLoading = createAction<boolean>('data/setDataLoading');

export const setUserAuthData = createAction<UserAuthType>('data/setUserAuthData');

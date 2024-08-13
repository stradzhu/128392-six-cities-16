import {createAction} from '@reduxjs/toolkit';
import {AllCityList, SortTypes} from '../const';
import {ReviewType} from '../types/review';

export const changeCityAction = createAction<typeof AllCityList[number]>('changeCity');

export const changeSortTypeAction = createAction<typeof SortTypes[keyof typeof SortTypes]>('changeSortType');

export const addReviewAction = createAction<ReviewType>('addReview');

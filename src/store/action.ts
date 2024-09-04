import {createAction} from '@reduxjs/toolkit';
import {AllCityList, AuthorizationStatus, SortTypes} from '../const';
import {ReviewsType, ReviewType} from '../types/review';
import {OffersCardType, OfferType} from '../types/offer';
import {UserAuthType} from '../types/user';

export const changeCityAction = createAction<typeof AllCityList[number]>('main/changeCity');

export const changeSortTypeAction = createAction<typeof SortTypes[keyof typeof SortTypes]>('main/changeSortType');

export const addReviewAction = createAction<ReviewType>('addReview');

export const loadOffersCardAction = createAction<OffersCardType>('data/loadOffersCard');

export const requireAuthorizationAction = createAction<AuthorizationStatus>('user/requireAuthorization');

export const setUserAuthDataAction = createAction<UserAuthType>('data/setUserAuthData');

export const loadOfferAction = createAction<OfferType>('data/loadOffer');

export const loadNearOffersCardAction = createAction<OffersCardType>('data/nearOffersCard');

export const loadReviewsAction = createAction<ReviewsType>('data/loadReviews');

import {ReducerName} from '../../const.ts';
import {StateType} from '../../types/state.ts';

export const getOffersCardSelector = (state: StateType) => state[ReducerName.Data].offersCard;
export const getOfferSelector = (state: StateType) => state[ReducerName.Data].offer;
export const getNearOffersCardSelector = (state: StateType) => state[ReducerName.Data].nearOffersCard;
export const getReviewsSelector = (state: StateType) => state[ReducerName.Data].reviews;

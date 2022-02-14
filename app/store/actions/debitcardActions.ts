/*
 * Reducer actions related with debitcard
 */
import {ICardResponse} from 'app/models/api/debitCard';
import * as types from './types';

export function updateLimit(limit: string) {
  return {
    type: types.UPDATE_LIMIT_REQUEST,
    limitAmount: limit,
  };
}

export function disableLimit() {
  return {
    type: types.CHANGE_LIMIT_STATUS,
  };
}

export function onCardRequest() {
  return {
    type: types.GET_CARD_INFO_REQUEST,
  };
}

export function onCardResponse(response: ICardResponse) {
  return {
    type: types.GET_CARD_INFO_RESPONSE,
    response,
  };
}

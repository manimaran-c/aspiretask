import {all, takeLatest} from 'redux-saga/effects';
import * as types from '../actions/types';
import debitCardAsync from './debitCardSaga';

export default function* watch() {
  yield all([takeLatest(types.GET_CARD_INFO_REQUEST, debitCardAsync)]);
}

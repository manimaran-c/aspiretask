import {call, put} from 'redux-saga/effects';
import {Alert} from 'react-native';
import {getCardDetails} from 'app/services/cardInfo';
import * as debitcardActions from 'app/store/actions/debitcardActions';
import * as loaderActions from 'app/store/actions/loaderActions';

export default function* debitCardAsync(): any {
  yield put(loaderActions.enableLoader());
  try {
    const response = yield call(getCardDetails);
    if (response.status === 200) {
      yield put(debitcardActions.onCardResponse(response.data.data[0]));
      yield put(loaderActions.disableLoader());
    } else {
      yield call(errorHandler, response.message);
    }
  } catch (error) {
    yield call(errorHandler, error.message);
  }
}

function* errorHandler(message: string) {
  yield put(loaderActions.disableLoader());
  setTimeout(() => {
    Alert.alert('Aspire App', message);
  }, 200);
}

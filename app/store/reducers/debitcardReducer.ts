/* Debit card Reducer
 * handles card states in the app
 */
import createReducer from 'app/lib/createReducer';
import * as types from 'app/store/actions/types';

import {IDebitCardState} from 'app/models/reducers/debitcard';
import {
  ILimitRequestState,
  ICardResponseState,
} from 'app/models/actions/debitcard';
const initialState: IDebitCardState = {
  limitAmount: '',
  balance: '5000',
  amountSpend: '1000',
  limitEnabled: false,
  cardDetails: {
    cardHolderName: 'Johny Wick',
    cardNumber: '4543-6565-2496-3457', //'xxxx-xxxx-xxxx-xxxx'
    cardCvv: '123',
    cardValidity: '12/25',
  },
};

export const debitcardReducer = createReducer(initialState, {
  [types.UPDATE_LIMIT_REQUEST](
    state: IDebitCardState,
    action: ILimitRequestState,
  ) {
    return {
      ...state,
      limitAmount: action.limitAmount,
      limitEnabled: true,
    };
  },
  [types.CHANGE_LIMIT_STATUS](state: IDebitCardState) {
    return {
      ...state,
      limitEnabled: false,
    };
  },
  [types.GET_CARD_INFO_RESPONSE](
    state: IDebitCardState,
    action: ICardResponseState,
  ) {
    return {
      ...state,
      balance: action.response.balance,
      amountSpend: action.response.amountSpend,
      cardDetails: action.response.cardDetails,
    };
  },
});

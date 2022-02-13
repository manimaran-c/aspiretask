/* Login Reducer
 * handles login states in the app
 */
import createReducer from 'app/lib/createReducer';
import * as types from 'app/store/actions/types';

import {IDebitCardState} from 'app/models/reducers/debitcard';
import {
  ILimitRequestState,
  ILoginResponseState,
} from 'app/models/actions/debitcard';
const initialState: IDebitCardState = {
  limitAmount: '',
  balance: '',
  amountSpend: '',
  limitEnabled: false,
  cardDetails: {
    cardHolderName: '',
    cardNumber: 'xxxx-xxxx-xxxx-xxxx',
    cardCvv: '',
    cardValidity: '',
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
    action: ILoginResponseState,
  ) {
    return {
      ...state,
      balance: action.response.balance,
      amountSpend: action.response.amountSpend,
      cardDetails: action.response.cardDetails,
    };
  },
});

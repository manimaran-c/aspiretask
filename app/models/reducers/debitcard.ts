import {IDebitCardInfo} from '../api/debitCard';

export interface IDebitCardState {
  limitAmount: string;
  balance: string;
  amountSpend: string;
  limitEnabled: boolean;
  cardDetails: IDebitCardInfo;
}

import {ICardResponse} from '../api/debitCard';

export interface ILimitRequestState {
  type: String;
  limitAmount: string;
}

export interface ICardResponseState {
  type: String;
  response: ICardResponse;
}

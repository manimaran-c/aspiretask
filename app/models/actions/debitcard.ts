import {ICardResponse} from '../api/debitCard';

export interface ILimitRequestState {
  type: String;
  limitAmount: string;
}

export interface ILoginResponseState {
  type: String;
  response: ICardResponse;
}

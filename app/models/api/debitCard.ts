export interface ICardResponse {
  id: string;
  cardDetails: IDebitCardInfo;
  balance: string;
  amountSpend: string;
}

export interface IDebitCardInfo {
  cardHolderName: string;
  cardNumber: string;
  cardValidity: string;
  cardCvv: string;
}

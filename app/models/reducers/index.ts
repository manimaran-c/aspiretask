import {IDebitCardState} from 'app/models/reducers/debitcard';
import {ILoading} from 'app/models/reducers/loading';

interface IState {
  debitcardReducer: IDebitCardState;
  loadingReducer: ILoading;
}
export default IState;

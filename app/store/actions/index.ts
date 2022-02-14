// export action creators
import * as debitcardActions from './debitcardActions';
import * as navigationActions from './navigationActions';
import * as loaderActions from './loaderActions';

export const ActionCreators = Object.assign(
  {},
  debitcardActions,
  navigationActions,
  loaderActions,
);

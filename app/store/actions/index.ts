// export action creators
import * as loginActions from './debitcardActions';
import * as navigationActions from './navigationActions';
import * as loaderActions from './loaderActions';

export const ActionCreators = Object.assign(
  {},
  loginActions,
  navigationActions,
  loaderActions,
);

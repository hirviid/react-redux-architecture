import { combineReducers } from 'redux';
import { reducer as fetchReducer } from 'react-redux-fetch';
import cart from './catalogue/modules/cart';

export default combineReducers({
  repository: fetchReducer,
  [cart.constants.NAME]: cart.reducer,
});

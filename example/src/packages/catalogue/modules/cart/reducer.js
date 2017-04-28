import immutable from 'seamless-immutable';
import initialState from '@example/app/config/initialState';
import { PRODUCT_ADDED } from './actionTypes';
import { NAME } from './constants';

export default (state = immutable(initialState[NAME]), action) => {
  switch (action.type) {
    case PRODUCT_ADDED:
      if (state.products[action.payload.id]) {
        return state.setIn(
          ['products', action.payload.id, 'quantity'],
          state.products[action.payload.id].quantity + 1
        );
      }
      return state.setIn(['products', action.payload.id], {
        ...action.payload,
        quantity: action.payload.quantity || 1,
      });

    default:
      return state;
  }
};

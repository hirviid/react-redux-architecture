import immutable from 'seamless-immutable';
import { PRODUCT_ADDED } from './actionTypes';

const INITIAL_STATE = {
  products: {},
};

export default (state = immutable(INITIAL_STATE), action) => {
  switch (action.type) {
    case PRODUCT_ADDED:
      if (state.products[action.payload.id]) {
        return state.setIn(
          ['products', action.payload.id, 'quantity'],
          state.products[action.payload.id].quantity + 1,
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

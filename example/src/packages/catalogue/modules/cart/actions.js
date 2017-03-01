// @flow
import { CART_ADDED } from './actionTypes';
import type { CartProduct } from './types';

export const addProduct = (cartProduct: CartProduct) => ({
  type: CART_ADDED,
  payload: cartProduct,
});

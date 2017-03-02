// @flow
import { PRODUCT_ADDED } from './actionTypes';
import type { CartProduct } from './types';

export const addProduct = (cartProduct: CartProduct) => ({
  type: PRODUCT_ADDED,
  payload: cartProduct,
});

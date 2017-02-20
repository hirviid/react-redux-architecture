// @flow
import { CART_ADD } from './actionTypes';
import type { CartProduct } from './types';

export const addProduct = (cartProduct: CartProduct) => ({ type: CART_ADD, payload: cartProduct });

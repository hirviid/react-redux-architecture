// @flow
import React from 'react';
import type { CartProduct } from '../../types';

const CartProductItem = ({ product }: { product: CartProduct }) => (
  <div>
    <img src={`/images/catalogue/${product.id}.jpg`} width={40} alt={product.name} />
    {' '}
    {product.quantity}
    {' '}x{' '}
    {product.name}
    <br />
    {product.summary}
  </div>
);

export default CartProductItem;

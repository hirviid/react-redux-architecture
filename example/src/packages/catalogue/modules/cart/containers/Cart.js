// @flow
import React from 'react';
import map from 'lodash/fp/map';
import cartProducts from '../services/cartProducts';
import type { CartProduct } from '../types';
import CartProductItem from '../components/CartProductItem';

const Cart = (props: { products: Array<CartProduct> }) => (
  <div>
    Cart
    <ul>
      {map(product => (
        <li key={product.id}>
          <CartProductItem product={product} />
        </li>
      ))(props.products)}
    </ul>
  </div>
);

export default cartProducts(Cart);

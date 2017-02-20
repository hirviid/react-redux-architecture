import React from 'react';
import { connect } from 'react-redux';
import { getProductsInCart } from '../selectors';

const cartProducts = Component => {
  const CartProducts = props => <Component {...props} />;

  const mapStateToProps = state => ({
    products: getProductsInCart(state),
  });

  return connect(mapStateToProps)(CartProducts);
};

export default cartProducts;

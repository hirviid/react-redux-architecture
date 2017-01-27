// @flow
import React from 'react';
import type { CartProduct } from '../types';

const addToCart = (Component: ReactClass<*>) => {

  class AddToCart extends React.Component {
    static propTypes = {
    };

    handleAddToCart = (cartProduct: CartProduct) => {
      console.log('todo, add product to cart', cartProduct);
    }

    render() {
      const {
          ...other
      } = this.props;

      return <Component {...other} addToCart={this.handleAddToCart} />;
    }
  }

  return AddToCart;

};

export default addToCart;

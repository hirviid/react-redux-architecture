// @flow
import React from 'react';
import cart from '../../cart';
import type { CartProduct } from '../../cart/types';

type Props = {
  addToCart: (cartProduct: CartProduct) => void,
};

const cartTranslator = (Component: ReactClass<*>): ReactClass<*> => {
  class CartTranslator extends React.Component {
    props: Props;

    handleAddToCart = product => {
      const cartProduct: CartProduct = {
        id: product.id,
        name: product.name,
        summary: `${product.type} - ${product.content}`,
        price: product.price,
      };
      this.props.addToCart(cartProduct);
    };

    render() {
      const { ...other } = this.props;

      return <Component {...other} addToCart={this.handleAddToCart} />;
    }
  }

  return cart.services.addToCart(CartTranslator);
};

export default cartTranslator;

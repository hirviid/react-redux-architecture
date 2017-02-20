// @flow
import React from 'react';
import { connect } from 'react-redux';
import type { CartProduct } from '../types';
import { addProduct } from '../actions';

type Props = {
  dispatch: () => void,
};

const addToCart = (Component: ReactClass<*>) => {
  class AddToCart extends React.Component {
    props: Props;

    handleAddToCart = (cartProduct: CartProduct) => {
      this.props.dispatch(addProduct(cartProduct));
    };

    render() {
      const {
        ...other
      } = this.props;

      return <Component {...other} addToCart={this.handleAddToCart} />;
    }
  }

  return connect()(AddToCart);
};

export default addToCart;

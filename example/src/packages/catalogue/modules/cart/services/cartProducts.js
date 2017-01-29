import React from 'react';
import { connect } from 'react-redux';
import { getProductsInCart } from '../selectors';

const cartProducts = Component => {

    class CartProducts extends React.Component {
        static propTypes = {
        };

        render() {
            const {
                ...other
            } = this.props;

            return <Component {...other} />;
        }
    }

    const mapStateToProps = state => ({
        products: getProductsInCart(state),
    });

    return connect(mapStateToProps)(CartProducts);

};

export default cartProducts;

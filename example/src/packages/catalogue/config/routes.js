import product from '../modules/product';
import cart from '../modules/cart';

const routes = [
  { pattern: '/', component: product.scenes.CataloguePage, exactly: true },
  { pattern: '/cart', component: cart.scenes.CartPage },
];

export default routes;

import product from '../modules/product';
import cart from '../modules/cart';

const routes = [
  { path: '/', component: product.scenes.CataloguePage, exact: true },
  { path: '/cart', component: cart.scenes.CartPage },
];

export default routes;

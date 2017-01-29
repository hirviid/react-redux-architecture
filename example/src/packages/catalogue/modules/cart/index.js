import CartPage from './scenes/CartPage';
import addToCart from './services/addToCart';
import reducer from './reducer';
import { NAME } from './constants';

export default {
  scenes: { CartPage },
  services: { addToCart },
  reducer,
  constants: {
    NAME,
  },
};

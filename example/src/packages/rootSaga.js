import { fork, all } from 'redux-saga/effects';

import cart from './catalogue/modules/cart';


export default function* rootSaga() {
  yield all([
    fork(cart.sagas.sendAddedProductToGA),
  ]);
};

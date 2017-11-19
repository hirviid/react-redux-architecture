import { takeEvery } from 'redux-saga/effects';
import ReactGA from 'react-ga';
import { PRODUCT_ADDED } from '../actionTypes';
import { NAME } from '../constants';

export default function* sendAddedProductToGA() {
  return yield takeEvery(PRODUCT_ADDED, function(action) {
    console.debug(`Sending event to Google Analytics, with category "${NAME}", action "${PRODUCT_ADDED}" and label "${action.payload.name}"`);
    ReactGA.event({
      category: NAME,
      action: PRODUCT_ADDED,
      label: action.payload.name,
    });
  });
}

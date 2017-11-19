import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import configureStore from './app/store/configureStore';
import rootReducer from './packages/rootReducer';
import rootSaga from './packages/rootSaga';
import app from './packages/app';

const store = configureStore(rootReducer, rootSaga);

ReactDOM.render(
  <Provider store={store}>
      <app.components.Layout />
  </Provider>,
  document.getElementById('root')
);

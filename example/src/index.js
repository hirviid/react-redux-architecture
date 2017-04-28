import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import configureStore from './app/store/configureStore';
import rootReducer from './packages/rootReducer';
import app from './packages/app';

const store = configureStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
      <app.components.Layout />
  </Provider>,
  document.getElementById('root')
);

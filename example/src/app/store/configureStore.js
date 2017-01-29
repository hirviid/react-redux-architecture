import { createStore, compose, applyMiddleware } from 'redux';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import { middleware as fetchMiddleware } from 'react-redux-fetch';
import rootReducer from '../../packages/rootReducer';

function configureStoreProd(initialState) {
  const middlewares = [fetchMiddleware];

  return createStore(rootReducer, initialState, compose(applyMiddleware(...middlewares)));
}

function configureStoreDev(initialState) {
  const middlewares = [
    // Add other middleware on this line...
    // Redux middleware that spits an error on you when you try to mutate your state either inside a dispatch
    // or between dispatches.
    reduxImmutableStateInvariant(),
    fetchMiddleware,
  ];

  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  // add support for Redux dev tools
  const store = createStore(rootReducer, initialState, composeEnhancers(applyMiddleware(...middlewares)));

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../../packages/rootReducer', () => {
      const nextReducer = require('../../packages/rootReducer').default; //eslint-disable-line
      // eslint-disable-line global-require
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}

const configureStore = process.env.NODE_ENV === 'production' ? configureStoreProd : configureStoreDev;

export default configureStore;

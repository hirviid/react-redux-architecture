import { createStore, compose, applyMiddleware } from 'redux';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import { middleware as fetchMiddleware } from 'react-redux-fetch';

function configureStoreProd(rootReducer, initialState) {
  const middlewares = [fetchMiddleware];

  return createStore(rootReducer, initialState, compose(applyMiddleware(...middlewares)));
}

function configureStoreDev(rootReducer, initialState) {
  const middlewares = [
    // Add other middleware on this line...
    // Redux middleware that spits an error on you when you
    // try to mutate your state either inside a dispatch
    // or between dispatches.
    reduxImmutableStateInvariant(),
    fetchMiddleware,
  ];

  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  // add support for Redux dev tools
  const store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(...middlewares)),
  );

  return store;
}

const configureStore = process.env.NODE_ENV === 'production'
  ? configureStoreProd
  : configureStoreDev;

export default configureStore;

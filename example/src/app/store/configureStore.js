import { createStore, compose, applyMiddleware } from 'redux';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import { middleware as fetchMiddleware } from 'react-redux-fetch';
import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();

function configureStoreProd(rootReducer, rootSaga, initialState) {
  sagaMiddleware.run(rootSaga);

  const middlewares = [fetchMiddleware, sagaMiddleware];

  const store = createStore(rootReducer, initialState, compose(applyMiddleware(...middlewares)));

  sagaMiddleware.run(rootSaga);

  return store;
}

function configureStoreDev(rootReducer, rootSaga, initialState) {
  const middlewares = [
    // Add other middleware on this line...
    // Redux middleware that spits an error on you when you
    // try to mutate your state either inside a dispatch
    // or between dispatches.
    reduxImmutableStateInvariant(),
    fetchMiddleware,
    sagaMiddleware,
  ];

  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  // add support for Redux dev tools
  const store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(...middlewares))
  );

  sagaMiddleware.run(rootSaga);

  return store;
}

const configureStore = process.env.NODE_ENV === 'production'
  ? configureStoreProd
  : configureStoreDev;

export default configureStore;

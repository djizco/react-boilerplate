import { createStore, applyMiddleware, compose } from 'redux';
import createLogger from 'redux-logger';

import DevTools from '../containers/DevTools';
import rootReducer from '../reducers/index';

export default function configureStore(preloadedState) {
  const store = createStore(
    rootReducer,
    preloadedState,
    compose(
      applyMiddleware(createLogger()),
      DevTools.instrument()
    )
  );
  return store;
}

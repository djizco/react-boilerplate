import { createStore, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';

import DevTools from '../containers/DevTools';
import rootReducer from '../reducers/index';

export default function configureStore(preloadedState) {
  return createStore(
    rootReducer,
    preloadedState,
    compose(
      applyMiddleware(createLogger(), thunk),
      DevTools.instrument(),
    ),
  );
}

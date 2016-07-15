import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers/index.js';
import createLogger from 'redux-logger';
import DevTools from '../containers/DevTools.js';

export default function configureStore(preloadedState) {
  const store = createStore(
    rootReducer,
    preloadedState,
    compose(
      applyMiddleware( createLogger() ),
      DevTools.instrument()
    )
  );
  return store;
}

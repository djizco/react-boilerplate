import { createStore, applyMiddleware, compose } from 'redux';
import { autoRehydrate } from 'redux-persist';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import DevTools from '../components/DevTools';

const middlewares = [thunk];
let middleware;

if (process.env.NODE_ENV !== 'production') {
  const logger = createLogger({ collapsed: true, diff: true });
  middlewares.push(logger);
  middleware = compose(
    applyMiddleware(...middlewares),
    autoRehydrate(),
    DevTools.instrument(),
  );
} else {
  middleware = compose(
    applyMiddleware(...middlewares),
    autoRehydrate(),
  );
}

export default function configureStore(preloadedState) {
  return createStore(
    rootReducer,
    preloadedState,
    middleware,
  );
}

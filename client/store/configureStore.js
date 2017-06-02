import { createStore, applyMiddleware, compose } from 'redux';
import { enableBatching } from 'redux-batched-actions';
import { autoRehydrate } from 'redux-persist';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import DevTools from '../components/DevTools';

const middlewares = [thunk];
let middleware;

if (process.env.NODE_ENV === 'production') {
  middleware = compose(
    applyMiddleware(...middlewares),
    autoRehydrate(),
  );
} else {
  const logger = createLogger({ collapsed: true, diff: true });
  middlewares.push(logger);
  middleware = compose(
    applyMiddleware(...middlewares),
    autoRehydrate(),
    DevTools.instrument(),
  );
}

export default function configureStore(preloadedState) {
  return createStore(
    enableBatching(rootReducer),
    preloadedState,
    middleware,
  );
}

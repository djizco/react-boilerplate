import { createStore, applyMiddleware, compose } from 'redux';
import { enableBatching } from 'redux-batched-actions';
import { autoRehydrate } from 'redux-persist';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const middlewares = [thunk];

if (process.env.NODE_ENV !== 'production') {
  const logger = createLogger({ collapsed: true, diff: true });
  middlewares.push(logger);
}

const middleware = compose(
  applyMiddleware(...middlewares),
  autoRehydrate(),
);

export default function configureStore(preloadedState) {
  return createStore(
    enableBatching(rootReducer),
    preloadedState,
    middleware,
  );
}

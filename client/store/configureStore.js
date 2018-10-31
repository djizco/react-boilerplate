import { createStore, applyMiddleware, compose } from 'redux';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { autoRehydrate } from 'redux-persist';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

export default function configureStore(history, initialState = {}) {
  const middlewares = [routerMiddleware(history), thunk];

  if (process.env.NODE_ENV !== 'production') {
    const logger = createLogger({ collapsed: true, diff: true });
    middlewares.push(logger);
  }

  const middleware = compose(
    applyMiddleware(...middlewares),
    autoRehydrate(),
  );

  return createStore(
    connectRouter(history)(rootReducer),
    initialState,
    middleware,
  );
}

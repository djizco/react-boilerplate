import { createStore, applyMiddleware, compose } from 'redux';
import { createBrowserHistory } from 'history';
import { createReduxHistoryContext } from 'redux-first-history';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import { autoRehydrate } from 'redux-persist';

import createRootReducer from './reducers';

const { createReduxHistory, routerMiddleware, routerReducer } = createReduxHistoryContext({
  history: createBrowserHistory(),
});

const middlewares = [routerMiddleware, thunk];

if (process.env.NODE_ENV === 'development') {
  const logger = createLogger({ collapsed: true, diff: true });
  middlewares.push(logger);
}

const middleware = compose(
  applyMiddleware(...middlewares),
  autoRehydrate(),
);

export const store = createStore(
  createRootReducer(routerReducer),
  middleware,
);

export const history = createReduxHistory(store);

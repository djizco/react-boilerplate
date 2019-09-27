import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import createRootReducer from './reducers';

const persistConfig = {
  whitelist: ['counter', 'todos', 'nextTodoId'],
  key: 'root',
  storage,
};


export default function configureStore(history, initialState = {}) {
  const middlewares = [routerMiddleware(history), thunk];

  if (process.env.NODE_ENV === 'development') {
    const logger = createLogger({ collapsed: true, diff: true });
    middlewares.push(logger);
  }

  const rootReducer = createRootReducer(history);

  const persistedReducer = persistReducer(persistConfig, rootReducer);

  const store = createStore(
    persistedReducer,
    initialState,
    applyMiddleware(...middlewares),
  );

  const persistor = persistStore(store);

  return { store, persistor };
}

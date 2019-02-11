import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { routerReducer as routing } from 'react-router-redux';

import counter from './counter';
import todos from './todos';
import nextTodoId from './nextTodoId';

const createRootReducer = history => combineReducers({
  router: connectRouter(history),
  routing,
  counter,
  todos,
  nextTodoId,
});

export default createRootReducer;

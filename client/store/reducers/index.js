import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import counter from './counter';
import todos from './todos';
import nextTodoId from './nextTodoId';

const createRootReducer = history => combineReducers({
  router: connectRouter(history),
  counter,
  todos,
  nextTodoId,
});

export default createRootReducer;

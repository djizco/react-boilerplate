import { combineReducers } from 'redux';

import counter from './counter';
import todos from './todos';
import nextTodoId from './nextTodoId';

const createRootReducer = routerReducer => combineReducers({
  router: routerReducer,
  counter,
  todos,
  nextTodoId,
});

export default createRootReducer;

import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';

import counter from './counter';
import todos from './todos';
import nextTodoId from './nextTodoId';

const rootReducer = combineReducers({
  counter,
  todos,
  nextTodoId,
  routing,
});

export default rootReducer;

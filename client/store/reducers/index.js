import { combineReducers } from 'redux';

import counter from './counter';
import todos from './todos';

const createRootReducer = routerReducer => combineReducers({
  router: routerReducer,
  counter,
  todos,
});

export default createRootReducer;

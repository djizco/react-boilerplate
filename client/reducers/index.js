import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import counter from './counter';
import todo from './todo';

const rootReducer = combineReducers({
  counter,
  todo,
  routing: routerReducer,
});

export default rootReducer;

import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';

import counter from './counter';
import todos from './todos';

const rootReducer = combineReducers({
  counter,
  todos,
  routing,
});

export default rootReducer;

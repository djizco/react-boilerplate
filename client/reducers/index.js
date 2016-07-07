import { combineReducers }      from 'redux';
import { routerReducer }        from 'react-router-redux';
import { INCREMENT, DECREMENT } from '../actions/index.js';


function counter(state = 0, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  counter,
  routing: routerReducer
});

export default rootReducer;

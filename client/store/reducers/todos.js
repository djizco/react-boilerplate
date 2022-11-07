import update from 'immutability-helper';
import R from 'ramda';

import {
  ADD_TODO, TOGGLE_COMPLETE_TODO, UPDATE_TODO, DELETE_TODO, INCREMENT_TODO_ID,
} from '_store/actions/todos';

export function todo(state = { completed: false }, action) {
  switch (action.type) {
    case ADD_TODO:
      return update(state, {
        id: { $set: action.id },
        text: { $set: action.text },
        createdAt: { $set: action.createdAt },
      });
    case TOGGLE_COMPLETE_TODO:
      return update(state, {
        completed: { $apply: x => !x },
      });
    case UPDATE_TODO:
      return update(state, {
        text: { $set: action.text },
        updatedAt: { $set: action.updatedAt },
      });
    default:
      return state;
  }
}

export default function todos(state = { nextTodoId: 1, list: [] }, action) {
  const index = R.findIndex(R.propEq('id', action.id), state.list);

  switch (action.type) {
    case INCREMENT_TODO_ID:
      return update(state, { nextTodoId: { $apply: R.inc } });
    case ADD_TODO:
      return update(state, { list: { $push: [todo(undefined, action)] } });
    case TOGGLE_COMPLETE_TODO:
      return update(state, { list: { $splice: [[index, 1, todo(state.list[index], action)]] } });
    case UPDATE_TODO:
      return update(state, { list: { $splice: [[index, 1, todo(state.list[index], action)]] } });
    case DELETE_TODO:
      return update(state, { list: { $splice: [[index, 1]] } });
    default:
      return state;
  }
}

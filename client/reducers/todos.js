import update from 'immutability-helper';
import R from 'ramda';
import { ADD_TODO, TOGGLE_COMPLETE_TODO } from '../actions/todos';

export function todo(state = { completed: false }, action) {
  switch (action.type) {
    case ADD_TODO:
      return update(state, {
        id: { $set: action.id },
        text: { $set: action.text },
      });
    default:
      return state;
  }
}

export default function todos(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return update(state, { $push: [todo(undefined, action)]});
    case TOGGLE_COMPLETE_TODO:
      return R.update(
        action.index,
        update(state[action.index], {
          completed: { $set: !state[action.index].completed },
        }),
        state,
      );
    default:
      return state;
  }
}

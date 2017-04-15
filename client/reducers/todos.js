import update from 'immutability-helper';
import R from 'ramda';
import { ADD_TODO, TOGGLE_COMPLETE_TODO, UPDATE_TODO, DELETE_TODO } from '../actions/todos';

export function todo(state = { completed: false, deleted: false }, action) {
  switch (action.type) {
    case ADD_TODO:
      return update(state, {
        id: { $set: action.id },
        text: { $set: action.text },
        createdAt: { $set: action.createdAt },
        updatedAt: { $set: action.updatedAt },
      });
    default:
      return state;
  }
}

export default function todos(state = [], action) {
  const index = R.findIndex(R.propEq('id', action.id), state);
  switch (action.type) {
    case ADD_TODO:
      return update(state, { $push: [todo(undefined, action)]});
    case TOGGLE_COMPLETE_TODO:
      return R.update(
        index,
        update(state[index], {
          completed: { $set: !state[index].completed },
        }),
        state,
      );
    case UPDATE_TODO:
      return state;
    case DELETE_TODO:
      return R.update(
        index,
        update(state[index], {
          deleted: { $set: true },
        }),
        state,
      );
    default:
      return state;
  }
}

import update from 'immutability-helper';
import R from 'ramda';
import { ADD_TODO, TOGGLE_COMPLETE_TODO, EDIT_TODO, CANCEL_EDIT_TODO,
  UPDATE_TODO, DELETE_TODO } from '../actions/todos';

export function todo(state = { completed: false, deleted: false, edit: false, updatedAt: undefined }, action) {
  switch (action.type) {
    case ADD_TODO:
      return update(state, {
        id: { $set: action.id },
        text: { $set: action.text },
        createdAt: { $set: action.createdAt },
      });
    default:
      return state;
  }
}

export default function todos(state = [], action) {
  const index = R.findIndex(R.propEq('id', action.id), state);
  const todoItem = state[index];
  switch (action.type) {
    case ADD_TODO:
      return update(state, { $push: [todo(undefined, action)]});
    case TOGGLE_COMPLETE_TODO:
      return R.update(
        index,
        update(todoItem, {
          completed: { $set: !todoItem.completed },
        }),
        state,
      );
    case EDIT_TODO:
      return R.update(
        index,
        update(todoItem, {
          edit: { $set: true },
        }),
        state,
      );
    case CANCEL_EDIT_TODO:
      return R.update(
        index,
        update(todoItem, {
          edit: { $set: false },
        }),
        state,
      );
    case UPDATE_TODO:
      return R.update(
        index,
        update(todoItem, {
          edit: { $set: false },
          text: { $set: action.text },
          updatedAt: { $set: Date.now() },
        }),
        state,
      );
    case DELETE_TODO:
      return R.update(
        index,
        update(todoItem, {
          deleted: { $set: true },
          edit: { $set: false },
        }),
        state,
      );
    default:
      return state;
  }
}

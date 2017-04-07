import update from 'immutability-helper';
import { ADD_TODO } from '../actions/todos';

export function todo(state = {}, action) {
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
    default:
      return state;
  }
}

import update from 'immutability-helper';
import R from 'ramda';

const ADD_TODO = 'ADD_TODO';
const TOGGLE_COMPLETE_TODO = 'TOGGLE_COMPLETE_TODO';
const UPDATE_TODO = 'UPDATE_TODO';
const HIDE_TODO = 'HIDE_TODO';
const DELETE_TODO = 'DELETE_TODO';

let nextToDoId = 1;

// Actions
export function addTodo(text) {
  return {
    type: ADD_TODO,
    id: nextToDoId++,
    createdAt: Date.now(),
    text,
  };
}

export function toggleCompleteTodo(id) {
  return {
    type: TOGGLE_COMPLETE_TODO,
    id,
  };
}

export function updateTodo(id, text) {
  return {
    type: UPDATE_TODO,
    updatedAt: Date.now(),
    text,
    id,
  };
}

export function hideTodo(id) {
  return {
    type: HIDE_TODO,
    id,
  };
}

export function deleteTodo(id) {
  return {
    type: DELETE_TODO,
    id,
  };
}

// Reducers
export function todo(state = { completed: false, hidden: false }, action) {
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
    case HIDE_TODO:
      return update(state, {
        hidden: { $set: true },
      });
    default:
      return state;
  }
}

export default function todos(state = [], action) {
  const index = R.findIndex(R.propEq('id', action.id), state);
  const updatedAtIndex = { $splice: [[index, 1, todo(state[index], action)]] };

  switch (action.type) {
    case ADD_TODO:
      return update(state, { $push: [todo(undefined, action)] });
    case TOGGLE_COMPLETE_TODO:
      return update(state, updatedAtIndex);
    case UPDATE_TODO:
      return update(state, updatedAtIndex);
    case HIDE_TODO:
      return update(state, updatedAtIndex);
    case DELETE_TODO:
      return update(state, { $splice: [[index, 1]] });
    default:
      return state;
  }
}


export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_COMPLETE_TODO = 'TOGGLE_COMPLETE_TODO';
export const UPDATE_TODO = 'UPDATE_TODO';
export const HIDE_TODO = 'HIDE_TODO';
export const DELETE_TODO = 'DELETE_TODO';

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

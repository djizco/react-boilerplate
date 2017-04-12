export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_COMPLETE_TODO = 'TOGGLE_COMPLETE_TODO';

let nextToDoId = 1;

export function addTodo(text) {
  return {
    type: ADD_TODO,
    id: nextToDoId++,
    text,
  };
}

export function toggleCompleteTodo(index) {
  return {
    type: TOGGLE_COMPLETE_TODO,
    index,
  };
}

export const ADD_TODO = 'ADD_TODO';

let nextToDoId = 1;

export function addTodo(text) {
  return {
    type: ADD_TODO,
    id: nextToDoId++,
    text,
  };
}

import React from 'react';

import R from 'ramda';
import { useSelector } from 'react-redux';

import Todo from '../Todo';

export default function TodoList() {
  const todos = useSelector(state => state.todos);

  return (
    <ul className="todo-list">
      {R.map(todo => <Todo key={todo.id} {...todo} />, R.reverse(todos.list))}
    </ul>
  );
}

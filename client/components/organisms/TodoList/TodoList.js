import React from 'react';
import { useSelector } from 'react-redux';
import R from 'ramda';

import Todo from '_molecules/Todo';

export default function TodoList() {
  const { todos } = useSelector(R.pick(['todos']));

  return (
    <ul className="todo-list">
      {R.map(todo => <Todo key={todo.id} {...todo} />, R.reverse(todos))}
    </ul>
  );
}

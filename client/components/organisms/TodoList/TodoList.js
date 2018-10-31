import React from 'react';
import PropTypes from 'prop-types';
import R from '_utils/ramda';

import Todo from '_molecules/Todo';

export default function TodoList({ todos }) {
  return (
    <ul className="todo-list">
      {R.map(todo => <Todo key={todo.id} {...todo} />, R.reverse(todos))}
    </ul>
  );
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
};

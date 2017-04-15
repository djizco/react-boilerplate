import React from 'react';
import PropTypes from 'prop-types';
import R from 'ramda';
import Todo from './Todo';

export default function TodoList(props) {
  const { todos, toggleComplete, editTodo, cancelEdit, updateTodo, deleteTodo } = props;
  return (
    <ul className="todo-list">
      {R.reverse(todos).map(todo =>
        <Todo
          key={todo.id}
          toggleComplete={toggleComplete}
          editTodo={editTodo}
          cancelEdit={cancelEdit}
          updateTodo={updateTodo}
          deleteTodo={deleteTodo}
          {...todo} />)}
    </ul>
  );
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
  toggleComplete: PropTypes.func.isRequired,
  editTodo: PropTypes.func.isRequired,
  cancelEdit: PropTypes.func.isRequired,
  updateTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
};

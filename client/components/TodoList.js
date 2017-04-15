import React from 'react';
import PropTypes from 'prop-types';
import R from 'ramda';
import Todo from './Todo';

export default function TodoList(props) {
  return (
    <ul className="todo-list">
      {R.reverse(props.todos).map(todo =>
        <Todo
          key={todo.id}
          toggleComplete={props.toggleComplete}
          editTodo={props.editTodo}
          updateTodo={props.updateTodo}
          deleteTodo={props.deleteTodo}
          {...todo} />)}
    </ul>
  );
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
  toggleComplete: PropTypes.func.isRequired,
  editTodo: PropTypes.func.isRequired,
  updateTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
};

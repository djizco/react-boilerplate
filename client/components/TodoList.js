import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import R from 'ramda';

export function Todo(props) {
  const { id, text, createdAt, updatedAt, deleted, completed,
    toggleComplete, updateTodo, deleteTodo } = props;

  const iconClasses = classNames({
    fa: true,
    'fa-square-o': !completed,
    'fa-check-square-o': completed,
  });

  return (
    deleted ?
      null :
      <li className="todo">
        <span className="icon" onClick={() => toggleComplete(id)}>
          <i className={iconClasses} />
        </span>
        <span>{text}</span>
        <div className="has-text-right">
          <span className="icon">
            <i className="fa fa-pencil" />
          </span>
          <span className="icon" onClick={() => deleteTodo(id)}>
            <i className="fa fa-trash" />
          </span>
        </div>
      </li>
  );
}

Todo.propTypes = {
  id: PropTypes.number.isRequired,
  createdAt: PropTypes.number.isRequired,
  updatedAt: PropTypes.number.isRequired,
  deleted: PropTypes.bool.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  toggleComplete: PropTypes.func.isRequired,
  updateTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
};

export default function TodoList(props) {
  return (
    <ul className="todo-list">
      {R.reverse(props.todos).map(todo =>
        <Todo
          key={todo.id}
          toggleComplete={props.toggleComplete}
          updateTodo={props.updateTodo}
          deleteTodo={props.deleteTodo}
          {...todo} />)}
    </ul>
  );
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
  toggleComplete: PropTypes.func.isRequired,
  updateTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
};

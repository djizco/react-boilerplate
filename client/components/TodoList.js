import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export function Todo({ text, index, completed, toggleComplete }) {
  const iconClasses = classNames({
    fa: true,
    'fa-square-o': !completed,
    'fa-check-square-o': completed,
  });

  return (
    <li>
      <span className="icon" onClick={() => toggleComplete(index)}>
        <i className={iconClasses} />
      </span>
      {text}
    </li>
  );
}

Todo.propTypes = {
  completed: PropTypes.bool.isRequired,
  index: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  toggleComplete: PropTypes.func.isRequired,
};

export default function TodoList(props) {
  return (
    <ul>
      {props.todos.map((todo, index) =>
        <Todo key={todo.id} index={index} toggleComplete={props.toggleComplete} {...todo} />)}
    </ul>
  );
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
  toggleComplete: PropTypes.func.isRequired,
};

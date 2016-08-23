import React, { PropTypes } from 'react';

export function Todo(props) {
  return (
    <li>
      {props.text}
    </li>
  );
}

Todo.propTypes = {
  text: PropTypes.string.isRequired,
};

export default function TodoList(props) {
  return (
    <ul>
      {props.todos.map(todo => <Todo key={todo.id} {...todo} />)}
    </ul>
  );
}

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
};

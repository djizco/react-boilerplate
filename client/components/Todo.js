import React, { PropTypes } from 'react';
import AddTodo from './AddTodo';
import TodoList from './TodoList';

export default function Todo(props) {
  return (
    <div className="todo-app app-container">
      <div className="col-sm-12">
        <h1 className="app-header">Todo List:</h1>
        <div className="col-sm-8 col-sm-offset-2 text-center">
          <AddTodo onAddClick={props.handleAddClick} />
        </div>
        <div className="col-sm-8 col-sm-offset-2 text-left">
          <TodoList todos={props.todos} />
        </div>
      </div>
    </div>
  );
}

Todo.propTypes = {
  handleAddClick: PropTypes.func.isRequired,
  todos: PropTypes.array.isRequired,
};

import React from 'react';

import AddTodo from '../components/AddTodo';
import TodoList from '../components/TodoList';

export default function TodoPage() {
  return (
    <div className="todo-page">
      <div className="container">
        <div className="section todo-section">
          <h1 className="title is-1 has-text-centered">Todo List:</h1>
          <div className="columns">
            <div className="column is-8 is-offset-2 text-center">
              <AddTodo />
            </div>
          </div>
          <div className="columns">
            <div className="column is-8 is-offset-2 text-left">
              <TodoList />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

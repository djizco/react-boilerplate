import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { addTodo } from '../actions/todo';

import AddTodo from '../components/AddTodo';
import TodoList from '../components/TodoList';

class TodoPage extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    todos: PropTypes.array.isRequired,
  };

  constructor(props) {
    super(props);
    this.props = props;
  }

  handleAddClick = text => this.props.dispatch(addTodo(text))

  render() {
    return (
      <div>
        <AddTodo onAddClick={this.handleAddClick} />
        <TodoList todos={this.props.todos} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    todos: state.todo,
  };
}

export default connect(mapStateToProps)(TodoPage);

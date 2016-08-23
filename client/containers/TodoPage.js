import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { addTodo } from '../actions/todo';

import Todo from '../components/Todo';

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
      <Todo handleAddClick={this.handleAddClick} todos={this.props.todos} />
    );
  }
}

function mapStateToProps(state) {
  return {
    todos: state.todo,
  };
}

export default connect(mapStateToProps)(TodoPage);

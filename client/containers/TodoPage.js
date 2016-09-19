import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import R from 'ramda';
import { addTodo } from '../actions/todos';
import Todo from '../components/Todo';

export class TodoPage extends Component {
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

const mapStateToProps = R.pick(['todos']);

export default connect(mapStateToProps)(TodoPage);

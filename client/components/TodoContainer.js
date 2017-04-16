import R from 'ramda';
import { connect } from 'react-redux';
import { toggleCompleteTodo, updateTodo, hideTodo, deleteTodo } from '../actions/todos';
import Todo from './Todo';

const mapStateToProps = R.pick([]);

const mapDispatchToProps = dispatch => {
  return {
    toggleCompleteTodo: id => dispatch(toggleCompleteTodo(id)),
    updateTodo: (text, id) => dispatch(updateTodo(text, id)),
    hideTodo: id => dispatch(hideTodo(id)),
    deleteTodo: id => dispatch(deleteTodo(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Todo);

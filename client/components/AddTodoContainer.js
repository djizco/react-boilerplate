import R from 'ramda';
import { connect } from 'react-redux';
import { addTodo } from '../actions/todos';
import AddTodo from './AddTodo';

const mapStateToProps = R.pick([]);

const mapDispatchToProps = dispatch => {
  return {
    addTodo: text => dispatch(addTodo(text)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddTodo);

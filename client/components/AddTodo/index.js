import R from 'ramda';
import { connect } from 'react-redux';
import { addTodo } from '../../actions/todos';
import AddTodoContainer from './AddTodoContainer';

const mapStateToProps = R.pick([]);

const mapDispatchToProps = dispatch => ({
  addTodo: text => dispatch(addTodo(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddTodoContainer);

import R from 'ramda';
import { connect } from 'react-redux';
import { addTodoAndIncrement } from '../../store/actions/todos';
import AddTodoContainer from './AddTodoContainer';

const mapStateToProps = R.pick([]);

const mapDispatchToProps = dispatch => ({
  addTodo: text => dispatch(addTodoAndIncrement(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddTodoContainer);

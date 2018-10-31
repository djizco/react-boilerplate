import R from '_utils/ramda';
import { connect } from 'react-redux';

import TodoList from './TodoList';

const mapStateToProps = R.pick(['todos']);

export default connect(mapStateToProps)(TodoList);

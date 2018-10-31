import { connect } from 'react-redux';
import { push } from 'connected-react-router';

import HomeSection from './HomeSection';

const mapDispatchToProps = dispatch => ({
  pushToCounter: () => dispatch(push('counter')),
  pushToTodo: () => dispatch(push('todo')),
});

export default connect(null, mapDispatchToProps)(HomeSection);

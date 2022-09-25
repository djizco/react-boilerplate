import { connect } from 'react-redux';
import { push } from 'redux-first-history';
import { withStyles } from '@mui/styles';

import HomePage from './HomePage';

import styles from './styles';

const mapDispatchToProps = dispatch => ({
  pushToCounter: () => dispatch(push('/counter')),
  pushToTodo: () => dispatch(push('/todo')),
});

export default connect(null, mapDispatchToProps)(withStyles(styles)(HomePage));

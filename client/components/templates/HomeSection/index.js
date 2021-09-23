import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import { withStyles } from '@mui/styles';

import HomeSection from './HomeSection';

import styles from './styles';

const mapDispatchToProps = dispatch => ({
  pushToCounter: () => dispatch(push('/counter')),
  pushToTodo: () => dispatch(push('/todo')),
});

export default connect(null, mapDispatchToProps)(withStyles(styles)(HomeSection));

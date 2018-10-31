import { connect } from 'react-redux';
import R from '_utils/ramda';
import { increment } from '_store/actions/counter';
import IncrementButton from './IncrementButton';

const mapStateToProps = R.pick([]);

const mapDispatchToProps = dispatch => ({
  increment: () => dispatch(increment()),
});

export default connect(mapStateToProps, mapDispatchToProps)(IncrementButton);

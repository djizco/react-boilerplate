import { connect } from 'react-redux';
import * as R from 'ramda';
import { increment, decrement } from '../../../store/actions/counter';
import CounterSection from './CounterSection';

const mapStateToProps = R.pick(['counter']);

const mapDispatchToProps = dispatch => ({
  increment: () => dispatch(increment()),
  decrement: () => dispatch(decrement()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CounterSection);

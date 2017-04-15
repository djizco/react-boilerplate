import { connect } from 'react-redux';
import R from 'ramda';
import { increment, decrement } from '../actions/counter';
import Counter from './Counter';

const mapStateToProps = R.pick(['counter']);

const mapDispatchToProps = dispatch => {
  return {
    increment: () => dispatch(increment()),
    decrement: () => dispatch(decrement()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);

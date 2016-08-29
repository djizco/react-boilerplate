import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import Counter from '../components/Counter';
import { increment, decrement } from '../actions/counter';


export class CounterPage extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    counter: PropTypes.number.isRequired,
  };

  constructor(props) {
    super(props);
    this.props = props;
  }

  handleIncrement = (e) => {
    e.preventDefault();
    this.props.dispatch(increment());
  }

  handleDecrement = (e) => {
    e.preventDefault();
    this.props.dispatch(decrement());
  }

  render() {
    return (
      <Counter
        counter={this.props.counter}
        onIncrement={this.handleIncrement}
        onDecrement={this.handleDecrement} />
    );
  }
}

function mapStateToProps(state) {
  return {
    counter: state.counter,
  };
}

export default connect(mapStateToProps)(CounterPage);

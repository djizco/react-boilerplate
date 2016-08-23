import React, { Component, PropTypes } from 'react';
import Counter    from '../components/Counter';

import { connect }              from 'react-redux';
import { increment, decrement } from '../actions/counter';


class CounterPage extends Component {
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
      <div className="full-size">
        <Counter
          counter={this.props.counter}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    counter: state.counter,
  };
}

export default connect(mapStateToProps)(CounterPage);

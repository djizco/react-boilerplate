import React, { Component, PropTypes } from 'react';

import { connect }              from 'react-redux';
import { increment, decrement } from '../actions/index';

import Counter    from '../components/Counter';

class CounterPage extends Component {
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

CounterPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
  counter: PropTypes.number.isRequired,
};

function mapStateToProps(state) {
  return {
    counter: state.counter,
  };
}

export default connect(mapStateToProps)(CounterPage);

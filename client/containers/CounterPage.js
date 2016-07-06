import React, { Component } from 'react';

import { connect }              from 'react-redux';
import { increment, decrement } from '../actions/actions.js';

import Counter    from '../components/Counter.js';

const styles = {
  container: {
    height: '100%',
    width: '100%'
  }
};

class CounterPage extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    counter: 0
  }

  handleIncrement = (e) => {
    e.preventDefault();
    return this.props.dispatch( increment() );
  }

  handleDecrement = (e) => {
    e.preventDefault();
    return this.props.dispatch( decrement() );
  }

  render() {
    return (
      <div style={styles.container}>
        <Counter 
          counter={this.props.counter}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement} />
        }
      </div>
    );
  }
}

function select(state) {
  return {
    counter: state.counter
  }
}

export default connect(select)(CounterPage)

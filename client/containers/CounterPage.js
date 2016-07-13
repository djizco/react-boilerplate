import React, { Component } from 'react';

import { connect }              from 'react-redux';
import { increment, decrement } from '../actions/index.js';

import Counter    from '../components/Counter.js';

class CounterPage extends Component {
  constructor(props) {
    super(props);
  }
  
  handleIncrement = (e) => {
    e.preventDefault();
    this.props.dispatch( increment() );
  }

  handleDecrement = (e) => {
    e.preventDefault();
    this.props.dispatch( decrement() );
  }

  render() {
    return (
      <div className='full-size'>
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
    counter: state.counter
  }
}

export default connect(mapStateToProps)(CounterPage)

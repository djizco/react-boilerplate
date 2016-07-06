import React, { Component } from 'react';

import Counter from '../components/Counter.js';

const styles = {
  container: {
    height: '100%',
    width: '100%'
  }
};

export default class CounterContainer extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    counter: 0
  }

  handleIncrement = (e) => {
    e.preventDefault();

    this.setState({
      counter: this.state.counter + 1
    });
  }

  handleDecrement = (e) => {
    e.preventDefault();

    this.setState({
      counter: this.state.counter - 1
    });
  }

  render() {
    return (
      <div style={styles.container}>
        <Counter 
          counter={this.state.counter}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
          />
      </div>
    );
  }
}

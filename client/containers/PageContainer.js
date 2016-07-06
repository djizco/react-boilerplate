import React, { Component } from 'react';

import Page from '../components/Page.js';

const styles = {
  container: {
    height: '100%',
    width: '100%'
  }
};

export default class PageContainer extends Component {
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
        <Page 
          counter={this.state.counter}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
          />
      </div>
    );
  }
}

import React, { Component } from 'react';
import { browserHistory } from 'react-router';

import Home from '../components/Home';

export default class HomePage extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  handleToCounter = (e) => {
    e.preventDefault();

    browserHistory.push('counter');
  }

  handleToTodo = (e) => {
    e.preventDefault();

    browserHistory.push('todo');
  }

  render() {
    return (
      <Home toTodo={this.handleToTodo} toCounter={this.handleToCounter} />
    );
  }
}

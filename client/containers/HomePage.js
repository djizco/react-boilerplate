import React, { Component } from 'react';
import { browserHistory } from 'react-router';

import Home from '../components/Home';

export default class HomePage extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  handleContinue = (e) => {
    e.preventDefault();

    browserHistory.push('counter');
  }

  render() {
    return (
      <div className="full-size">
        <Home onContinue={this.handleContinue} />
      </div>
    );
  }
}

import React, { Component } from 'react';

import Home from '../components/Home.js';

export default class HomePage extends Component {
  constructor(props) {
    super(props);
  }

  static contextTypes = {
    router: React.PropTypes.object.isRequired
  }

  handleContinue = (e) => {
    e.preventDefault();

    this.context.router.push({
      pathname: '/counter'
    });
  }

  render() {
    return (
      <div className='full-size'>
        <Home onContinue={this.handleContinue} />
      </div>
    );
  }
}

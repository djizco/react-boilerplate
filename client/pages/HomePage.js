import React, { Component } from 'react';
import { browserHistory } from 'react-router';

import RaisedButton from 'material-ui/RaisedButton';
import Footer from '../components/Footer';


export default class HomePage extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  handleToCounter = e => {
    e.preventDefault();

    browserHistory.push('counter');
  }

  handleToTodo = e => {
    e.preventDefault();

    browserHistory.push('todo');
  }

  styles = {
    button: { margin: '10px' },
  };

  render() {
    return (
      <div className="home-container">
        <div className="page home-page app-flex">
          <h1 className="title is-1">React App</h1>
          <RaisedButton label="Counter App" style={this.styles.button} onClick={this.handleToCounter} />
          <RaisedButton label="Todo App" style={this.styles.button} onClick={this.handleToTodo} />
        </div>
        <Footer />
      </div>
    );
  }
}

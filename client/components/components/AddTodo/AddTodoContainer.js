import React, { Component } from 'react';
import PropTypes from 'prop-types';

import AddTodo from './AddTodo';

export default class AddTodoContainer extends Component {
  static propTypes = {
    addTodo: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    this.props = props;
  }

  state = {
    text: '',
  }

  componentDidMount() {
    window.addEventListener('keypress', this.keypress);
  }

  componentWillUnmount() {
    window.removeEventListener('keypress', this.keypress);
  }

  updateText = e => this.setState({ text: e.target.value })

  keypress = e => {
    if (e.key === 'Enter') { this.addTodo(); }
  }

  handleClick = () => this.addTodo()

  addTodo = () => {
    const { text } = this.state;
    if (text) {
      this.props.addTodo(text);
      this.setState({ text: '' });
    }
  }

  render() {
    return (
      <AddTodo
        text={this.state.text}
        updateText={this.updateText}
        handleClick={this.handleClick} />
    );
  }
}

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Button from './Button';

export default class AddTodoContainer extends Component {
  static propTypes = {
    onAddClick: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);
    this.props = props;
  }

  componentWillMount() {
    window.addEventListener('keypress', this.keypress);
  }

  componentWillUnmount() {
    window.removeEventListener('keypress', this.keypress);
  }

  styles = {
    button: {
      width: '100%',
    },
  }

  keypress = e => {
    if (e.key === 'Enter') { this.addTodo(); }
  }

  handleClick = (e) => {
    e.preventDefault();
    this.addTodo();
  }

  addTodo() {
    const text = this.input.value;
    if (text) {
      this.props.onAddClick(text);
      this.input.value = '';
    }
  }

  render() {
    return (
      <div className="add-todo columns is-gapless">
        <div className="column is-10">
          <input className="input" type="text" ref={c => { this.input = c; }} />
        </div>
        <div className="column is-2">
          <Button style={this.styles.button} handleClick={this.handleClick} label="Add" success={true} />
        </div>
      </div>
    );
  }
}

import React, { Component, PropTypes } from 'react';

export default class AddTodo extends Component {
  handleClick = (e) => {
    e.preventDefault();
    const text = this.input.value;

    this.props.onAddClick(text);
    this.input.value = '';
  }

  render() {
    return (
      <div>
        <input type="text" ref={c => { this.input = c; }} />
        <button onClick={this.handleClick}>Add</button>
      </div>
    );
  }
}

AddTodo.propTypes = {
  onAddClick: PropTypes.func.isRequired,
};

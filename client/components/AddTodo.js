import React, { Component, PropTypes } from 'react';

export default class AddTodo extends Component {
  handleClick = (e) => {
    e.preventDefault();
    const text = this.input.value;
    if (text) {
      this.props.onAddClick(text);
      this.input.value = '';
    }
  }

  render() {
    return (
      <div className="add-todo">
        <input type="text" ref={c => { this.input = c; }} />
        <button className="btn btn-sm btn-border btn-success" onClick={this.handleClick}>Add</button>
      </div>
    );
  }
}

AddTodo.propTypes = {
  onAddClick: PropTypes.func.isRequired,
};

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
      <div className="add-todo col-sm-12">
        <input className="col-sm-10" type="text" ref={c => { this.input = c; }} />
        <button
          className="btn btn-sm btn-border btn-success col-sm-1 col-sm-offset-1"
          onClick={this.handleClick} >
          Add
        </button>
      </div>
    );
  }
}

AddTodo.propTypes = {
  onAddClick: PropTypes.func.isRequired,
};

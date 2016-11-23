import React, { Component, PropTypes } from 'react';
import Button from './Button';

export default class AddTodo extends Component {
  static propTypes = {
    onAddClick: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);
    this.props = props;
  }

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
      <div className="add-todo columns is-gapless">
        <div className="column is-10">
          <input className="input" type="text" ref={c => { this.input = c; }} />
        </div>
        <div className="column is-2">
          <Button handleClick={this.handleClick} label="Add" success={true} />
        </div>
      </div>
    );
  }
}

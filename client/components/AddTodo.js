import React, { Component, PropTypes } from 'react';
import Button from './Button';

export default class AddTodoContainer extends Component {
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

  styles = {
    button: {
      width: '100%',
    },
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

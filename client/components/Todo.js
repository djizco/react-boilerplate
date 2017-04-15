import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import moment from 'moment';

export default class Todo extends Component {
  static propTypes = {
    id: PropTypes.number.isRequired,
    createdAt: PropTypes.number.isRequired,
    updatedAt: PropTypes.number.isRequired,
    deleted: PropTypes.bool.isRequired,
    completed: PropTypes.bool.isRequired,
    edit: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired,
    toggleComplete: PropTypes.func.isRequired,
    editTodo: PropTypes.func.isRequired,
    updateTodo: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    this.props = props;
  }

  state = {
    text: this.props.text,
  }

  updateText = e => this.setState({ text: e.target.value })

  render() {
    const { id, text, createdAt, updatedAt, deleted, completed, edit,
      toggleComplete, editTodo, updateTodo, deleteTodo } = this.props;

    const iconClasses = classNames({
      fa: true,
      'fa-square-o': !completed,
      'fa-check-square-o': completed,
    });

    return (
      deleted ?
        null :
        <li className="todo">
          <div className="create-text">
            created {moment(createdAt).fromNow()}
          </div>
          {edit ?
            null :
            <span className="icon" onClick={() => toggleComplete(id)}>
              <i className={iconClasses} />
            </span>
          }
          {edit ?
            <div className="field">
              <p className="control">
                <textarea
                  className="textarea"
                  value={this.state.text}
                  onChange={this.updateText} />
              </p>
            </div>
            :
            <span>{text}</span>
          }
          <div className="has-text-right">
            {updatedAt ?
              <span className="edit-text is-pulled-left">
                edited {moment(updatedAt).fromNow()}
              </span> : null
            }
            {edit ?
              <span className="icon" onClick={() => updateTodo(id, this.state.text)}>
                <i className="fa fa-clipboard" />
              </span>
              :
              <span className="icon" onClick={() => editTodo(id)}>
                <i className="fa fa-pencil" />
              </span>
            }
            <span className="icon" onClick={() => deleteTodo(id)}>
              <i className="fa fa-trash" />
            </span>
          </div>
        </li>
    );
  }
}

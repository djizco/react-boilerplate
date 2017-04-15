import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import moment from 'moment';

export default class Todo extends Component {
  static propTypes = {
    id: PropTypes.number.isRequired,
    createdAt: PropTypes.number.isRequired,
    updatedAt: PropTypes.number,
    deleted: PropTypes.bool.isRequired,
    completed: PropTypes.bool.isRequired,
    edit: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired,
    toggleComplete: PropTypes.func.isRequired,
    editTodo: PropTypes.func.isRequired,
    cancelEdit: PropTypes.func.isRequired,
    updateTodo: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired,
  };

  static defaultProps = {
    updatedAt: 0,
  }

  constructor(props) {
    super(props);
    this.props = props;
  }

  state = {
    text: this.props.text,
    updateMessage: '',
    createMessage: '',
  }

  componentDidMount() {
    this.updateMessages();
    this.interval = window.setInterval(this.updateMessages, 1000);
  }

  componentWillReceiveProps(props) {
    this.setState({ updatedMessage: moment(props.updatedAt).fromNow() });
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  updateMessages = () => {
    this.setState({
      updatedMessage: this.props.updatedAt ? moment(this.props.updatedAt).fromNow() : '',
      createdMessage: moment(this.props.createdAt).fromNow(),
    });
  }

  updateText = e => this.setState({ text: e.target.value })

  handleCancelEdit = id => {
    this.setState({ text: this.props.text });
    this.props.cancelEdit(id);
  }

  render() {
    const { id, text, updatedAt, deleted, completed, edit,
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
            created {this.state.createdMessage}
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
                edited {this.state.updatedMessage}
              </span> : null
            }
            {edit ?
              <span className="icon" onClick={() => this.handleCancelEdit(id)}>
                <i className="fa fa-ban" />
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

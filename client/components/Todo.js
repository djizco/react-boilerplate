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

    const toggleIconClasses = classNames({
      fa: true,
      'fa-square-o': !completed,
      'fa-check-square-o': completed,
    });

    return (
      deleted ?
        null :
        <li className="todo box">
          <article className="media">

            <figure className="media-left">
              <span className="icon" onClick={() => toggleComplete(id)}>
                <i className={toggleIconClasses} />
              </span>
            </figure>

            <div className="media-content">
              <div className="content">
                <p>
                  <small>created {this.state.createdMessage}</small>
                </p>
                {edit ?
                  <textarea
                    className="textarea"
                    value={this.state.text}
                    onChange={this.updateText} />
                  :
                  <span>{text}</span>
                }
              </div>

              <div className="has-text-right">
                {updatedAt ?
                  <small className="is-pulled-left">
                    edited {this.state.updatedMessage}
                  </small> : null
                }
                {edit ?
                  <span className="icon" onClick={() => updateTodo(id, this.state.text)}>
                    <i className="fa fa-floppy-o" />
                  </span>
                  :
                  <span className="icon" onClick={() => editTodo(id)}>
                    <i className="fa fa-pencil" />
                  </span>
                }
                {edit ?
                  <span className="icon" onClick={() => this.handleCancelEdit(id)}>
                    <i className="fa fa-ban" />
                  </span>
                  :
                  <span className="icon" onClick={() => deleteTodo(id)}>
                    <i className="fa fa-trash" />
                  </span>
                }
              </div>
            </div>

          </article>
        </li>
    );
  }
}

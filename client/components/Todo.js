import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import moment from 'moment';

export default class Todo extends Component {
  static propTypes = {
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    deleted: PropTypes.bool.isRequired,
    createdAt: PropTypes.number.isRequired,
    updatedAt: PropTypes.number,
    toggleCompleteTodo: PropTypes.func.isRequired,
    updateTodo: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired,
  };

  static defaultProps = {
    updatedAt: undefined,
  }

  constructor(props) {
    super(props);
    this.props = props;
  }

  state = {
    text: this.props.text,
    edit: false,
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

  updateText = e => this.setState({ text: e.target.value });
  editTodo = () => this.setState({ edit: true });
  cancelEdit = () => this.setState({ text: this.props.text, edit: false });
  deleteTodo = () => this.props.deleteTodo(this.props.id);
  toggleCompleteTodo = () => this.props.toggleCompleteTodo(this.props.id);

  updateTodo = () => {
    if (this.state.text) {
      this.setState({ edit: false });
      this.props.updateTodo(this.props.id, this.state.text);
    }
  }

  render() {
    const { updatedAt, deleted, completed } = this.props;
    const { edit, createdMessage, updatedMessage } = this.state;

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
              <span className="icon" onClick={this.toggleCompleteTodo}>
                <i className={toggleIconClasses} />
              </span>
            </figure>

            <div className="media-content">
              <div className="content">
                <p>
                  <small>created {createdMessage}</small>
                </p>
                {edit ?
                  <textarea
                    className="textarea"
                    value={this.state.text}
                    onChange={this.updateText} />
                  :
                  <span>{this.props.text}</span>
                }
              </div>

              <div className="has-text-right">
                {updatedAt ?
                  <small className="is-pulled-left">
                    edited {updatedMessage}
                  </small> : null
                }
                {edit ?
                  <span className="icon" onClick={this.updateTodo}>
                    <i className="fa fa-floppy-o" />
                  </span>
                  :
                  <span className="icon" onClick={this.editTodo}>
                    <i className="fa fa-pencil" />
                  </span>
                }
                {edit ?
                  <span className="icon" onClick={this.cancelEdit}>
                    <i className="fa fa-ban" />
                  </span>
                  :
                  <span className="icon" onClick={this.deleteTodo}>
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

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import moment from 'moment';
import ConfirmModal from './ConfirmModal';

export default class Todo extends Component {
  static propTypes = {
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    hidden: PropTypes.bool.isRequired,
    createdAt: PropTypes.number.isRequired,
    updatedAt: PropTypes.number,
    toggleCompleteTodo: PropTypes.func.isRequired,
    updateTodo: PropTypes.func.isRequired,
    hideTodo: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired,
  };

  static defaultProps = {
    updatedAt: undefined,
  };

  constructor(props) {
    super(props);
    this.props = props;
  }

  state = {
    text: this.props.text,
    edit: false,
    confirm: false,
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
  editTodo = () => this.setState({ edit: true })
  cancelEdit = () => this.setState({ text: this.props.text, edit: false })
  hideTodo = () => this.props.hideTodo(this.props.id)
  deleteTodo = () => this.props.deleteTodo(this.props.id)
  toggleCompleteTodo = () => this.props.toggleCompleteTodo(this.props.id)
  openModal = () => this.setState({ confirm: true })
  closeModal = () => this.setState({ confirm: false })

  updateTodo = () => {
    if (this.state.text) {
      this.setState({ edit: false });
      this.props.updateTodo(this.props.id, this.state.text);
    }
  }

  render() {
    const { updatedAt, hidden, completed } = this.props;
    const { edit, confirm, createdMessage, updatedMessage } = this.state;

    const toggleIconClasses = classNames({
      fa: true,
      'fa-square-o': !completed,
      'fa-check-square-o': completed,
    });

    return (
      hidden ?
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

              <nav className="level">
                <div className="level-left">
                  {updatedAt ?
                    <div className="level-item">
                      <small className="is-pulled-left">
                        edited {updatedMessage}
                      </small></div> : null
                  }
                </div>
                <div className="level-right">
                  {edit ?
                    <div className="level-item">
                      <span className="icon" onClick={this.updateTodo}>
                        <i className="fa fa-floppy-o" />
                      </span>
                    </div>
                    :
                    <div className="level-item">
                      <span className="icon" onClick={this.editTodo}>
                        <i className="fa fa-pencil" />
                      </span>
                    </div>
                  }
                  {edit ?
                    <div className="level-item">
                      <span className="icon" onClick={this.cancelEdit}>
                        <i className="fa fa-ban" />
                      </span>
                    </div>
                    :
                    <div className="level-item">
                      <span className="icon" onClick={this.openModal}>
                        <i className="fa fa-trash" />
                      </span>
                    </div>
                  }
                </div>
              </nav>

            </div>
          </article>
          <ConfirmModal
            confirm={confirm}
            closeModal={this.closeModal}
            deleteTodo={this.deleteTodo} />
        </li>
    );
  }
}

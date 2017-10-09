import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ConfirmModal from '../ConfirmModal';

export default function Todo(props) {
  const {
    completed, hidden, edit, confirm, text, currentText, updated, createdMessage, updatedMessage,
    toggleCompleteTodo, updateText, updateTodo, editTodo, cancelEdit, deleteTodo,
    openModal, closeModal,
  } = props;

  const toggleIconClasses = classNames({
    fa: true,
    'fa-lg': true,
    'fa-square-o': !completed,
    'fa-check-square-o': completed,
  });

  return !hidden && (
    <li className="todo box">
      <article className="media">
        <figure className="media-left">
          <span className="icon" onClick={toggleCompleteTodo} onKeyPress={toggleCompleteTodo}>
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
                value={currentText}
                onChange={updateText} />
              :
              <span>{text}</span>
            }
          </div>

          <nav className="level is-mobile">
            <div className="level-left">
              {updated && <small>edited {updatedMessage}</small>}
            </div>
            <div className="level-right">
              {edit ?
                <span className="icon space-right" onClick={updateTodo} onKeyPress={updateTodo}>
                  <i className="fa fa-lg fa-floppy-o" />
                </span>
                :
                <span className="icon space-right" onClick={editTodo} onKeyPress={editTodo}>
                  <i className="fa fa-lg fa-pencil" />
                </span>
              }
              {edit ?
                <span className="icon" onClick={cancelEdit} onKeyPress={cancelEdit}>
                  <i className="fa fa-lg fa-ban" />
                </span>
                :
                <span className="icon" onClick={openModal} onKeyPress={cancelEdit}>
                  <i className="fa fa-lg fa-trash" />
                </span>
              }
            </div>
          </nav>
        </div>
      </article>
      <ConfirmModal
        confirm={confirm}
        closeModal={closeModal}
        deleteTodo={deleteTodo} />
    </li>
  );
}

Todo.propTypes = {
  completed: PropTypes.bool.isRequired,
  hidden: PropTypes.bool.isRequired,
  confirm: PropTypes.bool.isRequired,
  edit: PropTypes.bool.isRequired,
  updated: PropTypes.bool.isRequired,

  text: PropTypes.string.isRequired,
  currentText: PropTypes.string.isRequired,
  createdMessage: PropTypes.string.isRequired,
  updatedMessage: PropTypes.string.isRequired,

  toggleCompleteTodo: PropTypes.func.isRequired,
  updateText: PropTypes.func.isRequired,
  updateTodo: PropTypes.func.isRequired,
  editTodo: PropTypes.func.isRequired,
  cancelEdit: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
  openModal: PropTypes.func.isRequired,
  closeModal: PropTypes.func.isRequired,
};

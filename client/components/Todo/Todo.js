import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ConfirmModal from '../ConfirmModal';

export default function Todo(props) {
  const {
    completed, edit, confirm, text, currentText, updated, createdMessage, updatedMessage,
    toggleCompleteTodo, updateText, updateTodo, editTodo, cancelEdit, deleteTodo,
    openModal, closeModal,
  } = props;

  const toggleIconClasses = classNames({
    fa: true,
    'fa-square-o': !completed,
    'fa-check-square-o': completed,
  });

  return (
    <li className="todo box">
      <article className="media">
        <figure className="media-left">
          <span className="icon" onClick={toggleCompleteTodo}>
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

          <div>
            {updated ?
              <small className="is-pulled-left">
                edited {updatedMessage}
              </small> : null
            }

            {edit ?
              <span className="icon is-pulled-right" onClick={cancelEdit}>
                <i className="fa fa-ban" />
              </span>
              :
              <span className="icon is-pulled-right" onClick={openModal}>
                <i className="fa fa-trash" />
              </span>
            }
            {edit ?
              <span className="icon is-pulled-right space-right" onClick={updateTodo}>
                <i className="fa fa-floppy-o" />
              </span>
              :
              <span className="icon is-pulled-right space-right" onClick={editTodo}>
                <i className="fa fa-pencil" />
              </span>
            }
          </div>

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

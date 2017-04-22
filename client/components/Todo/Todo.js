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

          <nav className="level">
            <div className="level-left">
              {updated ?
                <div className="level-item">
                  <small className="is-pulled-left">
                    edited {updatedMessage}
                  </small></div> : null
              }
            </div>
            <div className="level-right">
              {edit ?
                <div className="level-item">
                  <span className="icon" onClick={updateTodo}>
                    <i className="fa fa-floppy-o" />
                  </span>
                </div>
                :
                <div className="level-item">
                  <span className="icon" onClick={editTodo}>
                    <i className="fa fa-pencil" />
                  </span>
                </div>
              }
              {edit ?
                <div className="level-item">
                  <span className="icon" onClick={cancelEdit}>
                    <i className="fa fa-ban" />
                  </span>
                </div>
                :
                <div className="level-item">
                  <span className="icon" onClick={openModal}>
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

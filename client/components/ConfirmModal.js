import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default function ConfirmModal(props) {
  const { confirm, closeModal, deleteTodo } = props;
  const modalClasses = classNames({
    modal: true,
    'confirm-modal': true,
    'is-active': confirm,
  });

  return (
    <div className={modalClasses}>
      <div className="modal-background" />
      <div className="modal-content">
        <div className="card">
          <div className="card-content">
            <div className="content has-text-centered">
              Are you sure you wanted to delete this item?
            </div>
          </div>
          <footer className="card-footer">
            <a href="#" className="card-footer-item" onClick={closeModal} onKeyPress={closeModal}>Cancel</a>
            <a href="#" className="card-footer-item" onClick={deleteTodo} onKeyPress={deleteTodo}>Delete</a>
          </footer>
        </div>
      </div>
      <button className="modal-close" onClick={closeModal} />
    </div>
  );
}

ConfirmModal.propTypes = {
  confirm: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
};

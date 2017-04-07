import React, { PropTypes } from 'react';
import classNames from 'classnames';

export default function Button(props) {
  const { success, danger, handleClick, label } = props;
  const classes = classNames({ button: true, 'is-success': success, 'is-danger': danger });
  return (
    <button
      type="button"
      className={classes}
      onClick={handleClick} >
      {label}
    </button>
  );
}

Button.propTypes = {
  success: PropTypes.bool,
  danger: PropTypes.bool,
  handleClick: PropTypes.func,
  label: PropTypes.string,
};

Button.defaultProps = {
  label: '',
  success: false,
  danger: false,
  handleClick: () => {},
};

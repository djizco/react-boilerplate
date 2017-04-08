import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default function Button(props) {
  const { success, danger, handleClick, label, style } = props;
  const classes = classNames({ button: true, 'is-success': success, 'is-danger': danger });
  return (
    <button
      style={style}
      type="button"
      className={classes}
      onClick={handleClick} >
      {label}
    </button>
  );
}

Button.propTypes = {
  style: PropTypes.object,
  success: PropTypes.bool,
  danger: PropTypes.bool,
  handleClick: PropTypes.func,
  label: PropTypes.string,
};

Button.defaultProps = {
  style: {},
  label: '',
  success: false,
  danger: false,
  handleClick: () => {},
};

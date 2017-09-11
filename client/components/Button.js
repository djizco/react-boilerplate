import React from 'react';
import PropTypes from 'prop-types';

export default function Button(props) {
  const { handleClick, label, type, style } = props;

  const typeMap = {
    info: 'is-info',
    primary: 'is-primary',
    success: 'is-success',
    warning: 'is-warning',
    danger: 'is-danger',
  };

  const isType = typeMap[type] || 'is-info';

  return (
    <button
      style={style}
      type="button"
      className={`button ${isType}`}
      onClick={handleClick} >
      {label}
    </button>
  );
}

Button.propTypes = {
  style: PropTypes.object,
  type: PropTypes.string,
  handleClick: PropTypes.func,
  label: PropTypes.string,
};

Button.defaultProps = {
  style: {},
  label: '',
  type: 'info',
  handleClick: () => {},
};

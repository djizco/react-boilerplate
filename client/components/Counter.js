import React, { PropTypes } from 'react';

export function Button(props) {
  return (
    <button
      type="button"
      className={props.className}
      onClick={props.handleClick} >
      {props.children}
    </button>
  );
}

Button.propTypes = {
  className: PropTypes.string,
  handleClick: PropTypes.func.isRequired,
  children: PropTypes.string.isRequired,
};

export default function Counter(props) {
  return (
    <div className="counter-app app-container">
      <div className="col-sm-12">
        <h1 className="app-header">Counter:</h1>
        <div className="counter">{props.counter}</div>
        <div className="col-sm-offset-3 col-sm-3 text-center">
          <Button
            className="btn btn-lg btn-success btn-border margin-sm"
            handleClick={props.onIncrement} >
            Increment
          </Button>
        </div>
        <div className="col-sm-3 text-center">
          <Button
            className="btn btn-lg btn-danger btn-border margin-sm"
            handleClick={props.onDecrement} >
            Decrement
          </Button>
        </div>
      </div>
    </div>
  );
}

Counter.propTypes = {
  counter: PropTypes.number,
  onDecrement: PropTypes.func.isRequired,
  onIncrement: PropTypes.func.isRequired,
};

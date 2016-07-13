import React, { PropTypes } from 'react';

const Button = (props) => {
  return (
    <button type='button'
      className={props.className}
      onClick={props.handleClick}>
      {props.children}
    </button>
  );
}

export default function Counter(props) {
  return (
    <div className='counter-container full-size'>
      <div className='col-sm-12'>
      <h1 className='counter-header'>Counter:</h1>
      <div className='counter'>{props.counter}</div>
        <div className='col-sm-offset-3 col-sm-3 text-center'>
          <Button
            className='btn btn-lg btn-success btn-border margin-sm'
            handleClick={props.onIncrement} >
            Increment
          </Button>
        </div>
        <div className='col-sm-3 text-center'>
          <Button
            className='btn btn-lg btn-danger btn-border margin-sm'
            handleClick={props.onDecrement}>
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
  onIncrement: PropTypes.func.isRequired
}

Counter.defaultProps = {
  counter: 0
}

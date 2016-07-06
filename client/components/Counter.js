import React, { PropTypes } from 'react';

const styles = {
  container: {
    backgroundColor: '#EEE',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    flexWrap: 'wrap',
    height: '100%',
    width: '100%'
  },
  header: {
    fontSize: '65px',
    color: '#333',
    textAlign: 'center',
    width: '100%',
    fontWeight: 100
  },
  counter: {
    textAlign: 'center',
    fontSize: '120px',
    width: '200px',
    margin: '0 auto'
  },
  button: {
    margin: '10px'
  },
  buttonWrapper: {
    textAlign: 'center'
  }
};

function Button(props){
  return (
    <button type='button'
      style={styles.button}
      className={props.className}
      onClick={props.handleClick}>
      {props.children}
    </button>
  );
}

export default function Counter(props) {
  return (
    <div style={styles.container}>
      <div className='col-sm-12'>
      <h1 style={styles.header}>Counter:</h1>
      <div style={styles.counter}>{props.counter}</div>
        <div className='col-sm-offset-3 col-sm-3' style={styles.buttonWrapper}>
          <Button className='btn btn-lg btn-success' handleClick={props.onIncrement}>Increment</Button>
        </div>
        <div className='col-sm-3' style={styles.buttonWrapper}>
          <Button className='btn btn-lg btn-danger' handleClick={props.onDecrement}>Decrement</Button>
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

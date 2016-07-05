import React from 'react';

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
    fontWeight: 100
  },
  counter: {
    fontSize: '120px'
  },
  button: {
    margin: 10
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

export default function Page(props){
  return (
    <div style={styles.container} className='text-center'>
      <h1 style={styles.header}>Counter:</h1>
      <div style={styles.counter}>{props.counter}</div>
      <div className='col-sm-12'>
        <div className='col-sm-offset-4 col-sm-2'>
          <Button className='btn btn-lg btn-success' handleClick={props.onIncrement}>Increment</Button>
        </div>
        <div className='col-sm-2'>
          <Button className='btn btn-lg btn-danger' handleClick={props.onDecrement}>Decrement</Button>
        </div>
      </div>
    </div>
  );
}

import React, { PropTypes } from 'react';
import bgTexture            from '../assets/images/bg-texture.jpg';

const styles = {
  container: {
    backgroundSize: 'cover',
    backgroundImage: `url(${bgTexture})`,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%'
  },
  header: {
    fontSize: 64,
    color: '#333',
    fontWeight: 100,
  },
  button: {
    margin: 10
  }
};

function Button(props){
  return (
    <button type='button'
      style={styles.button}
      className='btn btn-lg'
      onClick={props.onContinue}>
      {props.children}
    </button>
  );
}

export default function Home(props){
  return (
    <div style={styles.container}>
      <h1 style={styles.header}>My New App</h1>
      <Button onContinue={props.onContinue}>Continue to App</Button>
    </div>
  );
}

Home.propTypes = {
  onContinue: PropTypes.func.isRequired
}

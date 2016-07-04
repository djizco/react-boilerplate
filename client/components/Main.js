import React  from 'react';
import {Link} from 'react-router';

const styles = {
  header: {
    display: 'flex', 
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 5
  },
  logo: {
    margin: 0,
  },
  link: {
    textDecoration: 'none',
    color: '#DDD'
  }
};

export default function Main(){
  return (
    <div style={styles.header}>
      <Link to='/' activeStyle={styles.link}>
        <h2 style={styles.logo}>New App</h2>
      </Link>
    </div>
  );
}

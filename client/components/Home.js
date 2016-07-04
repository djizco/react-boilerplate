import React from 'react';

const styles = {
  header: {
    fontSize: 64,
    color: '#333',
    fontWeight: 100,
  }
};

export default function Home(){
  return (
    <div>
      <h1 style={styles.header}>My New App</h1>
    </div>
  );
}

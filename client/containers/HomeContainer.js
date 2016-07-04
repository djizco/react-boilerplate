import React from 'react';
import Home  from '../components/Home.js';

const styles = {
  container: {
    backgroundSize: 'cover',
    backgroundImage: "url('client/images/bg-texture.jpg')",
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%'
  }
};

export default class HomeContainer extends React.Component{
  constructor(props) {
    super(props);
  }

  render(){
    return (
      <div style={styles.container}>
        <Home />
      </div>
    );
  }
}

import React from 'react';
import Main  from '../components/Main.js';

const styles = {
  container: {
    width: '100%',
    height: '92%',
    background: '#66F',
    color: 'white',
  }
};

export default class MainContainer extends React.Component{
  constructor(props) {
    super(props);
  }

  render(){
    return (
      <div style={styles.container}>
        <Main />
        {this.props.children}
      </div>
    );
  }
}

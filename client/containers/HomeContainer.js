import React from 'react';
import Home  from '../components/Home.js';

const styles = {
  container: {
    height: '100%',
    width: '100%'
  }
};

export default class HomeContainer extends React.Component{
  constructor(props) {
    super(props);
  }

  static contextTypes = {
    router: React.PropTypes.object.isRequired
  }

  handleContinue = (e) => {
    e.preventDefault();

    this.context.router.push({
      pathname: '/page'
    });
  }

  render(){
    return (
      <div style={styles.container}>
        <Home onContinue={this.handleContinue} />
      </div>
    );
  }
}

import React, { Component }    from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import Main from '../components/Main.js';

const styles = {
  container: {
    width: '100%',
    height: '92%',
    background: 'white',
    color: 'black'
  }
};

export default class MainContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={styles.container}>
        <ReactCSSTransitionGroup
          transitionName='appear'
          transitionEnterTimeout={500}
          transitionLeaveTimeout={500}>
          <Main />
          {React.cloneElement(this.props.children, {key: this.props.location.pathname})}
        </ReactCSSTransitionGroup>
      </div>
    );
  }
}

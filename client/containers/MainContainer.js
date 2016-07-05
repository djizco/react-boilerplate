import React                   from 'react';
import Main                    from '../components/Main.js';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const styles = {
  container: {
    width: '100%',
    height: '92%',
    background: 'white',
    color: 'black'
  }
};

export default class MainContainer extends React.Component{
  constructor(props) {
    super(props);
  }

  render(){
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

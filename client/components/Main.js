import React, { Component }    from 'react';
import { Link } from 'react-router';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const styles = {
  container: {
    width: '100%',
    height: '92%',
    background: 'white',
    color: 'black'
  },
  header: {
    display: 'flex', 
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 5,
    background: '#66F',
    color: 'white',
  },
  logo: {
    margin: 10,
  },
  link: {
    textDecoration: 'none',
    color: '#DDD'
  }
};

export default class Main extends Component {
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
          <div style={styles.header}>
            <Link to='/' activeStyle={styles.link}>
              <h2 style={styles.logo}>New App</h2>
            </Link>
          </div>
          {React.cloneElement(this.props.children, {key: this.props.location.pathname})}
        </ReactCSSTransitionGroup>
      </div>
    );
  }
}

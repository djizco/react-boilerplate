import React, { Component } from 'react';
import Navigation from './Navigation';

export default class NavigationContainer extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  state = {
    active: false,
  }

  componentDidMount() {
    window.addEventListener('resize', this.deactivate);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.deactivate);
  }

  toggleActive = () => {
    if (window.innerWidth <= 768) {
      this.setState(prevState => ({ active: !prevState.active }));
    }
  }

  deactivate = () => this.setState({ active: false })

  render() {
    const { active } = this.state;

    return (
      <Navigation
        active={active}
        toggleActive={this.toggleActive}
        deactivate={this.deactivate} />
    );
  }
}

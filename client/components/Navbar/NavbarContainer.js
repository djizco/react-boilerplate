import React, { Component } from 'react';
import Navbar from './Navbar';

export default class NavbarContainer extends Component {
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

  toggleActive = () => this.setState(prevState => ({ active: !prevState.active }))

  deactivate = () => this.setState({ active: false })

  render() {
    const { active } = this.state;

    return (
      <Navbar
        active={active}
        toggleActive={this.toggleActive}
        deactivate={this.deactivate} />
    );
  }
}

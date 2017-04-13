import React, { Component } from 'react';
import { Link } from 'react-router';
import classNames from 'classnames';

export default class Navigation extends Component {
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
      this.setState({ active: !this.state.active });
    }
  }

  deactivate = () => this.setState({ active: false })

  render() {
    const { active } = this.state;
    const toggleClasses = classNames({ 'nav-toggle': true, 'is-active': active });
    const menuClasses = classNames({ 'nav-menu': true, 'nav-right': true, 'is-active': active });

    return (
      <div className="nav-container is-fixed has-shadow">
        <div className="container">
          <nav className="nav">

            <div className="nav-left">
              <Link to="/" className="nav-item">
                <h3 className="title is-3">React</h3>
              </Link>
            </div>

            <div className="nav-center">
              <Link to="/" className="nav-item">
                <span className="icon is-medium">
                  <i className="fa fa-home" />
                </span>
              </Link>
            </div>

            <span className={toggleClasses} onClick={this.toggleActive}>
              <span />
              <span />
              <span />
            </span>

            <div className={menuClasses}>
              <Link to="/" className="nav-item" onClick={this.toggleActive}>
                <h6 className="title is-6">Home</h6>
              </Link>
              <Link to="counter" className="nav-item" onClick={this.toggleActive}>
                <h6 className="title is-6">Counter</h6>
              </Link>
              <Link to="todo" className="nav-item" onClick={this.toggleActive}>
                <h6 className="title is-6">Todo</h6>
              </Link>
            </div>

          </nav>
        </div>
      </div>
    );
  }
}

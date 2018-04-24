import React from 'react';
import { Link, withRouter } from 'react-router-dom'; // withRouter preserves is-active functionality
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';

export class Navbar extends React.Component {
  state = { active: false };
  toggleBurgerClick = () => {
    this.setState(({ active }) => ({ active: !active }));
  };
  isActive = () => {
    return this.state.active ? 'is-active' : '';
  };
  render() {
    const { startLogout } = this.props;
    return (
      <nav className="navbar is-transparent is-primary" aria-label="main navigation">
        <div className="container">
          <div className="navbar-brand">
            <Link className="navbar-item" to="/dashboard">
              <img src="/images/carpi-white.svg" alt="carpi" width="112" height="28" />
            </Link>
            <button
              className={`button navbar-burger is-primary ${this.isActive()}`}
              onClick={this.toggleBurgerClick}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
          <div className={`navbar-menu ${this.isActive()}`}>
            <div className="navbar-start" />
            <div className="navbar-end">
              <div className="navbar-item">
                <a
                  className="button is-outlined is-inverted is-primary nav--button"
                  onClick={startLogout}
                >
                  Logout
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  startLogout: () => dispatch(startLogout())
});

export default withRouter(connect(undefined, mapDispatchToProps)(Navbar));

import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../../actions/auth';

export const SplashNavbar = ({ startLogin }) => (
  <nav className="navbar is-transparent">
    <div className="container">
      <div className="navbar-brand">
        <div className="navbar-burger">
          <span />
          <span />
          <span />
        </div>
      </div>
      <div className="navbar-menu">
        <div className="navbar-end">
          <div className="navbar-item splash-navbar--login">
            <p>Already have an account?</p>
            <a className="button is-primary is-inverted is-outlined" onClick={startLogin}>
              Login
            </a>
          </div>
        </div>
      </div>
    </div>
  </nav>
);

const mapDispatchToProps = (dispatch) => ({
  startLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps)(SplashNavbar);

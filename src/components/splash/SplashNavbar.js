import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../../actions/auth';

export class SplashNavbar extends React.Component {
  state = { active: false };
  toggleBurgerClick = () => {
    this.setState(({ active }) => ({ active: !active }));
  };
  isActive = () => {
    return this.state.active ? 'is-active' : '';
  };
  render() {
    const { startLogin } = this.props;
    return (
      <nav className="navbar is-transparent">
        <div className="container">
          <div className="navbar-brand">
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
            <div className="navbar-end">
              <div className="navbar-item splash-navbar--login">
                <p>Already have an account?</p>
                <a
                  className="button is-primary is-inverted is-outlined nav--button"
                  onClick={startLogin}
                >
                  Login
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
  startLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps)(SplashNavbar);

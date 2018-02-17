import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';

export const LoginPage = ({startLogin}) => (
	<section className='hero is-primary is-fullheight'>
		<div className='hero-head'>
			<nav className="navbar">
      <div className="container">
        <div className="navbar-brand">
          <a className="navbar-item">
            <img src='/images/carpi-white.svg' alt='carpi' width='112' height='28' />
          </a>
        </div>
        <div className="navbar-menu">
          <div className="navbar-end">
            <div className="navbar-item">
              <a className="button is-primary is-inverted is-outlined" onClick={startLogin}>Login</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
		</div>
		  <div className="hero-body">
    <div className="container has-text-centered">
      <img src='/images/carpi-white.svg' alt='carpi' width='200' height='80' />
      <h2 className='subtitle'>Seize the day!</h2>
      <button className='button is-primary is-inverted'>Get Started</button>
    </div>
  </div>
  <div className='hero-foot'>
  </div>

	</section>
);

const mapDispatchToProps = (dispatch) => ({
	startLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);


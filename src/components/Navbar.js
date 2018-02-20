import React from 'react';
import { Link, withRouter } from 'react-router-dom'; //withRouter preserves is-active functionality
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth.js'

export const Navbar = ({startLogout, uid}) => (
	<nav className="navbar is-transparent is-primary" role="navigation" aria-label="main navigation">
		<div className='container'>
			<div className="navbar-brand">
				<Link className='navbar-item' to='/dashboard'>
					<img src='/images/carpi-white.svg' alt='carpi' width='112' height='28'/>
				</Link>
				<button className="button navbar-burger">
  				<span></span>
  				<span></span>
  				<span></span>
				</button>
			</div>
			<div className="navbar-menu">
  			<div className="navbar-start">
  			</div>
  			<div className="navbar-end">
        {/*
          <Link className='navbar-item' to={`/user/${uid}`}>
            Profile
          </Link>  */}
  				  <div className='navbar-item'>
  				  	<a 
  				  	className="button is-outlined is-inverted is-primary" 
  				  	onClick={startLogout}>Logout
  				  	</a>
  				  </div>
  			</div>
  		</div>
		</div>
	</nav>
);

const mapDispatchToProps = (dispatch) => ({
	startLogout: () => dispatch(startLogout())
});

export default withRouter(connect(undefined, mapDispatchToProps)(Navbar));
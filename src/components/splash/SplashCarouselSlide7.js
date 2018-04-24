import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { startLogin } from '../../actions/auth';

export const SplashCarouselSlide7 = ({ startLogin }) => (
  <div className="column is-narrow has-text-centered">
    <Link to="/">
      <img
        className="slide7--logo"
        src="/images/carpi-white.svg"
        alt="carpi"
        width="250"
        height="100"
      />
    </Link>
    <h1 className="subtitle is-1">Seize Today!</h1>
    <button className="button is-primary is-inverted is-large is-outlined" onClick={startLogin}>
      Login with Google
    </button>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  startLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps)(SplashCarouselSlide7);

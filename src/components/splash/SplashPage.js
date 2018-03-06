import React from 'react';
import SplashNavbar from './SplashNavbar';
import SplashCarousel from './SplashCarousel';

export const SplashPage = () => (
  <section className="hero is-primary is-fullheight">
    <div className="hero-head">
      <SplashNavbar />
    </div>
    <div className="hero-body">
      <SplashCarousel />
    </div>
    <div className="hero-foot" />
  </section>
);

export default SplashPage;

import React from 'react';

export const SplashCarouselSlide1 = ({ forward }) => (
  <div className="column is-half has-text-centered">
    <img
      className="slide1--logo"
      src="/images/carpi-white.svg"
      alt="carpi"
      width="250"
      height="100"
    />
    <h1 className="subtitle is-4">
      A data-driven, day-to-day time management application for those with big dreams.
    </h1>
    <button className="button is-medium is-primary is-inverted" onClick={forward}>
      Show Me
    </button>
  </div>
);

export default SplashCarouselSlide1;

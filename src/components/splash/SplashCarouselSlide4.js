import React from 'react';
import moment from 'moment';
import SplashDoughnut from './SplashDoughnut';

export const SplashCarouselSlide4 = ({ forward, backward, setDoughnutData }) => (
  <div className="column is-half has-text-centered">
    <h1 className="title is-1 has-text-centered">Ta Da!</h1>
    <span className="subtitle is-3">
      {moment()
        .subtract(1, 'day')
        .format('MMMM Do, YYYY')}
    </span>
    <div className="splash-doughnut__tada">
      <SplashDoughnut
        error={false}
        setData={setDoughnutData}
        options={{ maintainAspectRatio: false, legend: { display: false } }}
      />
    </div>
    <div className="splash--icons">
      <a className="icon is-large splash--icon__left" onClick={backward}>
        <i className="fas fa-3x fa-arrow-circle-left" />
      </a>
      <a className="icon is-large splash--icon__right" onClick={forward}>
        <i className="fas fa-3x fa-arrow-circle-right" />
      </a>
    </div>
  </div>
);

export default SplashCarouselSlide4;

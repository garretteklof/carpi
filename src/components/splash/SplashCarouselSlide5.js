import React from 'react';
import Doughnut from 'react-chartjs-2';
import moment from 'moment';
import { SplashDateRangePicker } from './SplashDatePicker';
import {
  rangeDoughnutData,
  doughnutOneData,
  doughnutTwoData,
  doughnutThreeData,
  doughnutFourData,
  doughnutFiveData
} from '../../utils/splash';

export const SplashCarouselSlide5 = ({ forward, backward }) => (
  <div className="column is-12 has-text-centered">
    <h1 className="title is-1 has-text-centered">Log More And More Days</h1>
    <div className="columns">
      <div className="column is-one-fifth">
        <span className="subtitle is-5">
          {moment()
            .subtract(6, 'day')
            .format('MMMM Do, YYYY')}
        </span>
        <div className="splash-doughnut__list">
          <Doughnut
            data={doughnutOneData}
            options={{ maintainAspectRatio: false, legend: { display: false } }}
          />
        </div>
      </div>
      <div className="column is-one-fifth">
        <span className="subtitle is-5">
          {moment()
            .subtract(5, 'day')
            .format('MMMM Do, YYYY')}
        </span>
        <div className="splash-doughnut__list">
          <Doughnut
            data={doughnutTwoData}
            options={{ maintainAspectRatio: false, legend: { display: false } }}
          />
        </div>
      </div>
      <div className="column is-one-fifth">
        <span className="subtitle is-5">
          {moment()
            .subtract(4, 'day')
            .format('MMMM Do, YYYY')}
        </span>
        <div className="splash-doughnut__list">
          <Doughnut
            data={doughnutThreeData}
            options={{ maintainAspectRatio: false, legend: { display: false } }}
          />
        </div>
      </div>
      <div className="column is-one-fifth">
        <span className="subtitle is-5">
          {moment()
            .subtract(3, 'day')
            .format('MMMM Do, YYYY')}
        </span>
        <div className="splash-doughnut__list">
          <Doughnut
            data={doughnutFourData}
            options={{ maintainAspectRatio: false, legend: { display: false } }}
          />
        </div>
      </div>
      <div className="column is-one-fifth">
        <span className="subtitle is-5">
          {moment()
            .subtract(2, 'day')
            .format('MMMM Do, YYYY')}
        </span>
        <div className="splash-doughnut__list">
          <Doughnut
            data={doughnutFiveData}
            options={{ maintainAspectRatio: false, legend: { display: false } }}
          />
        </div>
      </div>
    </div>

    <h1 className="title is-1 has-text-centered">Combine Over A Date Range</h1>
    <SplashDateRangePicker />
    <div className="splash-doughnut__filter">
      <Doughnut
        data={rangeDoughnutData}
        options={{ maintainAspectRatio: false, legend: { display: false } }}
      />
    </div>
    <h1 className="title is-1 has-text-centered">Or Filter For Specific Activities</h1>
    <input type="text" className="input slide5--input" value="Playing Che" disabled readOnly />
    <div className="splash-doughnut__filter">
      <Doughnut
        data={doughnutFourData}
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

export default SplashCarouselSlide5;

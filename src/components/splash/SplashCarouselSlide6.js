import React from 'react';
import { Line } from 'react-chartjs-2';
import moment from 'moment';

export const SplashCarouselSlide6 = ({ forward, backward }) => (
  <div className="column is-half has-text-centered">
    <h1 className="title is-1 has-text-centered">Even Click On An Activity To See It Over Time!</h1>
    <div className="slide6--graph">
      <p className="subtitle is-2 has-text-centered has-text-dark">Writing That Symphony</p>
      <p className="subtitle is-4 has-text-centered has-text-dark">
        {`
            ${moment()
              .subtract(6, 'days')
              .format('MMMM DD, YYYY')} - 
            ${moment()
              .subtract(2, 'day')
              .format('MMMM DD, YYYY')}`}
      </p>
      <Line
        data={{
          labels: [
            moment().subtract(6, 'days'),
            moment().subtract(5, 'days'),
            moment().subtract(4, 'days'),
            moment().subtract(3, 'days'),
            moment().subtract(2, 'days')
          ],
          datasets: [
            {
              label: 'Writing That Symphony',
              fill: false,
              lineTension: 0.1,
              backgroundColor: '#1dd3b0',
              borderColor: '#1dd3b0',
              borderCapStyle: 'butt',
              borderDash: [],
              borderDashOffset: 0.0,
              borderJoinStyle: 'miter',
              pointBorderColor: '#1dd3b0',
              pointBackgroundColor: '#fff',
              pointBorderWidth: 1,
              pointHoverRadius: 5,
              pointHoverBackgroundColor: '#1dd3b0',
              pointHoverBorderColor: '#fff',
              pointHoverBorderWidth: 2,
              pointRadius: 1,
              pointHitRadius: 10,
              data: [1, 1, 0, 1, 1]
            }
          ]
        }}
        options={{
          scales: {
            xAxes: [
              {
                type: 'time',
                time: {
                  unit: 'day',
                  tooltipFormat: 'MMM D, YYYY',
                  displayFormats: { day: 'MMM D' }
                }
              }
            ],
            yAxes: [{}]
          }
        }}
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

export default SplashCarouselSlide6;

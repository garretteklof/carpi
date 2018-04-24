import React from 'react';
import { Line } from 'react-chartjs-2';
import { connect } from 'react-redux';
import selectDiems from '../../selectors/diems';

export class ActivityLineGraph extends React.Component {
  createDateAxis = ({ startDate, endDate }) => {
    const days = [];
    let day = startDate;
    while (day <= endDate) {
      days.push(day);
      day = day.clone().add(1, 'day');
    }
    return days;
  };

  createDataPoints = (diems, { activityGraph }) => {
    const coordinates = diems.map(({ activities, date }) => {
      const clickedActivity = activities.filter((activity) => activity.name === activityGraph);
      if (clickedActivity.length > 0) {
        const value = clickedActivity.map(({ timeSpent }) => timeSpent);
        return { x: date, y: value[0] };
      }
      return undefined;
    });
    return coordinates.filter((coordinate) => coordinate !== undefined);
  };

  setData = (labels, data) => {
    return {
      labels,
      datasets: [
        {
          data
        }
      ]
    };
  };

  render() {
    return (
      <section className="section">
        <div className="container">
          <p className="title is-2 has-text-centered has-text-white">
            {this.props.filters.activityGraph}
          </p>
          <p className="subtitle is-4 has-text-centered has-text-white">
            {`
            ${this.props.filters.startDate.format('MMMM DD, YYYY')} - 
            ${this.props.filters.endDate.format('MMMM DD, YYYY')}`}
          </p>
          <Line
            data={{
              labels: this.createDateAxis(this.props.filters),
              datasets: [
                {
                  label: this.props.filters.activityGraph,
                  fill: false,
                  lineTension: 0.1,
                  backgroundColor: '#fff',
                  borderColor: '#fff',
                  borderCapStyle: 'butt',
                  borderDash: [],
                  borderDashOffset: 0.0,
                  borderJoinStyle: 'miter',
                  pointBorderColor: '#fff',
                  pointBackgroundColor: '#fff',
                  pointBorderWidth: 1,
                  pointHoverRadius: 5,
                  pointHoverBackgroundColor: '#fff',
                  pointHoverBorderColor: '#fff',
                  pointHoverBorderWidth: 2,
                  pointRadius: 1,
                  pointHitRadius: 10,
                  data: this.createDataPoints(this.props.diems, this.props.filters)
                }
              ]
            }}
            options={{
              legend: { labels: { fontColor: '#fff' } },
              scales: {
                xAxes: [
                  {
                    type: 'time',
                    time: {
                      unit: 'day',
                      tooltipFormat: 'MMM D, YYYY',
                      displayFormats: { day: 'MMM D' }
                    },
                    gridLines: { display: false, color: '#fff' },
                    ticks: { fontColor: '#fff' }
                  }
                ],
                yAxes: [
                  {
                    gridLines: { display: false, color: '#fff' },
                    ticks: { fontColor: '#fff' }
                  }
                ]
              }
            }}
          />
        </div>
      </section>
    );
  }
}

const mapStateToProps = (state) => ({
  diems: selectDiems(state.diems, state.filters),
  filters: state.filters
});

export default connect(mapStateToProps)(ActivityLineGraph);

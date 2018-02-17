import React from 'react';
import { Line } from 'react-chartjs-2';
import { connect } from 'react-redux';
import moment from 'moment';
import selectDiems from '../selectors/diems';


export class ActivityLineGraph extends React.Component {

  createDateAxis = ({startDate, endDate}) => {
    const days = [];
    let day = startDate;
    while (day <= endDate) {
      days.push(day);
      day = day.clone().add(1, 'day');
    }
    return days;
  }

  createDataPoints = (diems, { activityGraph }) => {
    const coordinates = diems.map(({activities, date}) => {
      const activity = activities.filter((activity) => activity.name === activityGraph);
      if (activity.length > 0) {
        const value = activity.map(({timeSpent}) => timeSpent);
        return {x: date, y: value[0]};
      }
    });
    return coordinates.filter((coordinate) => coordinate !== undefined);
  }

  setData = (labels, data) => {
    return {
      labels,
      datasets: [{
        data
      }]
    };
  }


  render() {
    return (
      <Line 
        data={{
          labels: this.createDateAxis(this.props.filters),
          datasets: [
            {
              label: this.props.filters.activityGraph,
              fill: false,
              lineTension: 0.1,
              backgroundColor: 'rgba(75,192,192,0.4)',
              borderColor: 'rgba(75,192,192,1)',
              borderCapStyle: 'butt',
              borderDash: [],
              borderDashOffset: 0.0,
              borderJoinStyle: 'miter',
              pointBorderColor: 'rgba(75,192,192,1)',
              pointBackgroundColor: '#fff',
              pointBorderWidth: 1,
              pointHoverRadius: 5,
              pointHoverBackgroundColor: 'rgba(75,192,192,1)',
              pointHoverBorderColor: 'rgba(220,220,220,1)',
              pointHoverBorderWidth: 2,
              pointRadius: 1,
              pointHitRadius: 10,
              data: this.createDataPoints(this.props.diems, this.props.filters)
            }
          ]
        }}
        options={{
          scales: {
            xAxes: [{
              type: 'time',
              time: {
                unit: 'day',
                tooltipFormat: 'MMM D, YYYY',
                displayFormats: {
                  day: 'MMM D'
                }
              }
            }],
            yAxes: [{
            }]
          }
        }}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  diems: selectDiems(state.diems, state.filters),
  filters: state.filters
});

export default connect(mapStateToProps)(ActivityLineGraph);
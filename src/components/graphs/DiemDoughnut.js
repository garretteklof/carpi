import React from 'react';
import Doughnut from 'react-chartjs-2';
import { hexColors } from '../../utils/colors';

export default class DiemDoughnut extends React.Component {
  nameToArray = (activities, remainder) => {
    const nameToArray = activities.map(({ name }) => name);
    return remainder > 0 ? [...nameToArray, 'untracked'] : [...nameToArray];
  };
  timeSpentToArray = (activities, remainder) => {
    const timeSpentToArray = activities.map(({ timeSpent }) => timeSpent);
    return remainder > 0 ? [...timeSpentToArray, remainder] : [...timeSpentToArray];
  };

  setColors = () => {
    const act = this.props.activities;
    const rem = this.props.remainder;
    const remainderIndex = this.nameToArray(act, rem).lastIndexOf('untracked');
    const remainderColor = hexColors.gainsboro;
    const colors = act.map(({ category }) => {
      switch (category) {
        case 'Contributor':
          return hexColors.canary;
        case 'Inhibitor':
          return hexColors.orangesoda;
        case 'Basic Necessity':
          return hexColors.cerulean;
        default:
          return null;
      }
    });
    if (remainderIndex !== -1) {
      colors.splice(remainderIndex, 0, remainderColor);
    }
    return colors;
  };

  setData = (label, data) => {
    const act = this.props.activities;
    const rem = this.props.remainder;
    const total = this.timeSpentToArray(act, rem).reduce((a, b) => a + b, 0);
    if (total - rem > 24) {
      return {
        labels: ['> 24 Hrs'],
        datasets: [
          {
            data: [total],
            backgroundColor: ['#FF0000'],
            hoverBackgroundColor: ['#FF0000']
          }
        ]
      };
    }
    return {
      labels: label,
      datasets: [
        {
          data,
          backgroundColor: this.setColors(),
          hoverBackgroundColor: this.setColors()
        }
      ]
    };
  };

  render() {
    const { activities, remainder } = this.props;
    return (
      <Doughnut
        data={this.setData(
          this.nameToArray(activities, remainder),
          this.timeSpentToArray(activities, remainder)
        )}
        options={this.props.options}
      />
    );
  }
}

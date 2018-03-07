import React from 'react';
import Doughnut from 'react-chartjs-2';
import { connect } from 'react-redux';
import { groupData } from '../../utils/utils';
import { hexColors } from '../../utils/colors';
import selectDiems from '../../selectors/diems';
import { setActivityGraph } from '../../actions/filters';

export class DiemListDoughnut extends React.Component {
  consolidateDiemsToGroupArray = (diems) => {
    const allActivities = diems.map(({ activities }) => activities);
    const flattenedActivities = [].concat(...allActivities);
    return Array.from(groupData(flattenedActivities, ({ name }) => name)).map((collection) => ({
      name: collection[0],
      timeSpent: collection[1].map(({ timeSpent }) => timeSpent).reduce((a, b) => a + b),
      category: collection[1][0].category
    }));
  };

  calculateRemainder = (diems) =>
    diems.map(({ remainder }) => remainder).reduce((a, b) => a + b, 0);

  createNameArray = (diems) => {
    const remainder = this.calculateRemainder(diems);
    const nameArray = this.consolidateDiemsToGroupArray(diems).map(({ name }) => name);
    return remainder > 0 ? [...nameArray, 'untracked'] : [...nameArray];
  };

  createTimeSpentArray = (diems) => {
    const remainder = this.calculateRemainder(diems);
    const timeSpentArray = this.consolidateDiemsToGroupArray(diems).map(
      ({ timeSpent }) => timeSpent
    );
    return remainder > 0 ? [...timeSpentArray, remainder] : [...timeSpentArray];
  };

  totalTime = (diems) => {
    return this.createTimeSpentArray(diems).reduce((a, b) => a + b);
  };

  setColors = (hover) => {
    const categoryArray = this.consolidateDiemsToGroupArray(this.props.diems).map(
      ({ category }) => category
    );
    const colors = categoryArray.map((category) => {
      switch (category) {
        case 'Contributor':
          return [hexColors.canary, hexColors.canary_hover];
        case 'Inhibitor':
          return [hexColors.orangesoda, hexColors.orangesoda_hover];
        case 'Basic Necessity':
          return [hexColors.cerulean, hexColors.cerulean_hover];
        default:
          return null;
      }
    });
    const remainderIndex = this.createNameArray(this.props.diems).lastIndexOf('untracked');
    const remainderColor = hexColors.gainsboro;
    if (remainderIndex !== -1) {
      colors.splice(remainderIndex, 0, [remainderColor, remainderColor]);
    }
    if (hover) {
      return colors.map((color) => color[1]);
    }
    return colors.map((color) => color[0]);
  };

  setData = (labels, data) => {
    return {
      labels,
      datasets: [
        {
          data,
          backgroundColor: this.setColors(),
          hoverBackgroundColor: this.setColors(true)
        }
      ]
    };
  };

  graphActivity = (chartElement) => {
    if (chartElement.length) {
      const chart = this.refs.chart.chartInstance;
      const index = chartElement[0]._index;
      // const datasetIndex = chartElement[0]._datasetIndex;
      const label = chart.data.labels[index];
      // const value = chart.data.datasets[datasetIndex].data[index];
      const isolateActivity = this.props.diems.map(({ activities }) =>
        activities.filter(({ name }) => name === label)
      );
      const activityCount = [].concat(...isolateActivity).length;
      if (activityCount > 1) {
        this.props.setActivityGraph(label);
        this.props.history.push(`/graph/${label.toLowerCase()}`);
      }
    }
  };

  render() {
    const { diems } = this.props;
    return (
      <div>
        <div className="doughnut-container--list">
          <Doughnut
            ref="chart"
            onElementsClick={this.graphActivity}
            data={this.setData(this.createNameArray(diems), this.createTimeSpentArray(diems))}
            options={{
              maintainAspectRatio: false,
              legend: {
                display: false
              }
            }}
          />
        </div>
        {diems.length > 0 && (
          <p className="has-text-centered">
            <span className="subtitle is-3">{this.totalTime(diems)}</span> hrs
          </p>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  diems: selectDiems(state.diems, state.filters)
});

const mapDispatchToProps = (dispatch) => ({
  setActivityGraph: (activity) => dispatch(setActivityGraph(activity))
});

export default connect(mapStateToProps, mapDispatchToProps)(DiemListDoughnut);

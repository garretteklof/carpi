import React from 'react';
import DashboardLevel from './DashboardLevel';
import DiemListDoughnut from './DiemListDoughnut';
import DiemList from './DiemList';

export const Dashboard = (props) => (
  <section className="section">
    <div className="container">
      <DashboardLevel />
      <div className="columns">
        <div className="column is-two-fifths">
          <DiemListDoughnut history={props.history} />
        </div>
        <div className="column">
          <DiemList />
        </div>
      </div>
    </div>
  </section>
);

export default Dashboard;

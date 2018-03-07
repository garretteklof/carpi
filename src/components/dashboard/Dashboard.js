import React from 'react';
import DiemListDateFilter from '../list/DiemListDateFilter';
import DiemListActivityFilter from '../list/DiemListActivityFilter';
import DiemListDoughnut from '../graphs/DiemListDoughnut';
import DiemList from '../list/DiemList';

export const Dashboard = (props) => (
  <section className="section">
    <div className="container">
      <div className="columns">
        <div className="column is-narrow">
          <div className="container--filter">
            <DiemListDateFilter />
            <DiemListActivityFilter />
          </div>
          <DiemListDoughnut history={props.history} />
        </div>
        <DiemList />
      </div>
    </div>
  </section>
);

export default Dashboard;

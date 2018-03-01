import React from 'react';
import { Link } from 'react-router-dom';
import DiemListDateFilter from './DiemListDateFilter';
import DiemListActivityFilter from './DiemListActivityFilter';
import DiemCounter from './DiemCounter';

export const DashboardLevel = () => (
  <div className="level">
    <div className="level-item">
      <DiemListDateFilter />
    </div>
    <div className="level-item">
      <DiemListActivityFilter />
    </div>
    <div className="level-item">
      <DiemCounter />
    </div>
    <div className="level-item">
      <Link className="button is-primary" to="/create">
        New Diem
      </Link>
    </div>
  </div>
);

export default DashboardLevel;

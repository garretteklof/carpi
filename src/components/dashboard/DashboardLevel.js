import React from 'react';
import { Link } from 'react-router-dom';
import DiemListDateFilter from '../list/DiemListDateFilter';
import DiemListActivityFilter from '../list/DiemListActivityFilter';
import DiemCounter from '../list/DiemCounter';

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

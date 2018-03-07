import React from 'react';
import { Link } from 'react-router-dom';

export const DiemListLevel = () => (
  <div className="level">
    <div className="level-item">
      <Link className="button is-primary" to="/create">
        New Diem
      </Link>
    </div>
  </div>
);

export default DiemListLevel;

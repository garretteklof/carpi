import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import DiemDoughnut from '../graphs/DiemDoughnut';

const DiemListItem = ({ id, activities, date, remainder }) => (
  <div className="column is-one-third list--item">
    <Link to={`/edit/${id}`}>
      <div className="doughnut-container--list__item">
        <DiemDoughnut
          activities={activities}
          remainder={remainder}
          options={{
            maintainAspectRatio: false,
            legend: {
              display: false
            }
          }}
        />
      </div>
      <span className="subtitle is-5">{moment(date).format('MMMM Do, YYYY')}</span>
    </Link>
  </div>
);

export default DiemListItem;

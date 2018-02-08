import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

export const DiemListItem = ({ id, activities, date }) => (
	<Link to={`/edit/${id}`}>
		<div>
			<h2>{moment(date).format('MMMM Do, YYYY')}</h2>
			{activities.map(({name, timeSpent}, i) => (
				<p key={i}>{`${name} : ${timeSpent} hours`}</p>
			))}
		</div>
	</Link>
);

export default DiemListItem;
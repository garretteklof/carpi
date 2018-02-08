import React from 'react';
import moment from 'moment';

const DiemListItem = ({ activities, date }) => (
	<div>
		<h2>{moment(date).format('MMMM Do, YYYY')}</h2>
		{activities.map(({name, timeSpent}, i) => (
			<p key={i}>{`${name} : ${timeSpent} hours`}</p>
		))}
	</div>
);

export default DiemListItem;
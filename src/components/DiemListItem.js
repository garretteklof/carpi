import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import DiemDoughnut from './DiemDoughnut';

const DiemListItem = ({ id, activities, date, remainder }) => (
	<Link to={`/edit/${id}`}>
		<div>
			<h2>{moment(date).format('MMMM Do, YYYY')}</h2>
			{activities.map(({name, timeSpent}, i) => (
				<p key={i}>{`${name} : ${timeSpent} hours`}</p>
			))}
		</div>
		<DiemDoughnut
			activities={activities}
			remainder={remainder}
		/>
	</Link>
);


export default DiemListItem;
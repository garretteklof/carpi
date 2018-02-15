import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import DiemDoughnut from './DiemDoughnut';

const DiemListItem = ({ id, activities, date, remainder }) => (
	<Link to={`/edit/${id}`}>
		<div className='list-item is-clearfix'>
			<p className='list-item__date subtitle is-4 is-pulled-left'>{moment(date).format('MMMM Do, YYYY')}</p>
			<div className='doughnut-container is-pulled-right'>
				<DiemDoughnut
					activities={activities}
					remainder={remainder}
				/>
			</div>
		</div>
	</Link>
);


export default DiemListItem;
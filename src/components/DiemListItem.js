import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import DiemDoughnut from './DiemDoughnut';





export default class DiemListItem extends React.Component {

	nameToArray = (activities, remainder) => {
		const nameArray = activities.map(({name}) => name);
		return remainder > 0 ? [...nameArray, 'remainder'] : [...nameArray];
	}
	timeSpentToArray = (activities, remainder) => {
		const timeSpentArray = activities.map(({timeSpent}) => timeSpent);
		return remainder > 0 ? [...timeSpentArray, remainder] : [...timeSpentArray];
	}
	
	render() {
		const { id, activities, date, remainder } = this.props;
		return (
			<Link to={`/edit/${id}`}>
				{/*<div>
					<h2>{moment(date).format('MMMM Do, YYYY')}</h2>
					{activities.map(({name, timeSpent}, i) => (
						<p key={i}>{`${name} : ${timeSpent} hours`}</p>
					))}
				</div> */}
				<DiemDoughnut 
					nameArray={this.nameToArray(activities, remainder)} 
					timeSpentArray={this.timeSpentToArray(activities, remainder)}
				/>
			</Link>



		)
	}
}

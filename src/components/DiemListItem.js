import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import DiemDoughnut from './DiemDoughnut';





export default class DiemListItem extends React.Component {

	nameToArray = (activities) => activities.map(({name}) => name)
	timeSpentToArray = (activities) => activities.map(({timeSpent}) => timeSpent)
	
	render() {
		const { id, activities, date } = this.props;
		return (
			<Link to={`/edit/${id}`}>
				{/*<div>
					<h2>{moment(date).format('MMMM Do, YYYY')}</h2>
					{activities.map(({name, timeSpent}, i) => (
						<p key={i}>{`${name} : ${timeSpent} hours`}</p>
					))}
				</div> */}
				<DiemDoughnut 
					nameArray={this.nameToArray(activities)} 
					timeSpentArray={this.timeSpentToArray(activities)}
				/>
			</Link>



		)
	}
}

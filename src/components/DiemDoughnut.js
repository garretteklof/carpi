import React from 'react';
import Doughnut from 'react-chartjs-2';

export default class DiemDoughnut extends React.Component {

	nameToArray = (activities, remainder) => {
		const nameArray = activities.map(({name}) => name);
		return remainder > 0 ? [...nameArray, 'remainder'] : [...nameArray];
	}
	timeSpentToArray = (activities, remainder) => {
		const timeSpentArray = activities.map(({timeSpent}) => timeSpent);
		return remainder > 0 ? [...timeSpentArray, remainder] : [...timeSpentArray];
	}

	setColors = () => {
		const act = this.props.activities;
		const rem = this.props.remainder;
		const remainderIndex = this.nameToArray(act, rem).lastIndexOf('remainder');
		const remainderColor = '#CACFD6';
		const colors = ['#FF6384','#36A2EB','#FFCE56','#b40cb8','#fd6996'];
		if( remainderIndex !== -1) {
			colors.splice(remainderIndex, 0, remainderColor);
		}
		return colors;
	}

	setData = (label, data) => ({
		labels: label,
		datasets: [{
			data: data,
			backgroundColor: this.setColors(),
			hoverBackgroundColor: this.setColors()
		}]
	})

	render() {
		const {activities, remainder} = this.props;
		return (
			<div>
				<Doughnut
					data={this.setData(this.nameToArray(activities,remainder), 
						this.timeSpentToArray(activities, remainder))}
					width={200}
					height={200}
					options={{
						maintainAspectRatio: false
					}}		
				/>
			</div>
		)
	}
}

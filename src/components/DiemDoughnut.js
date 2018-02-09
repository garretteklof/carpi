import React from 'react';
import Doughnut from 'react-chartjs-2';

/*
const data = {
	labels: [
		'Red',
		'Blue',
		'Yellow'
	],
	datasets: [{
		data: [300, 50, 100],
		backgroundColor: [
		'#FF6384',
		'#36A2EB',
		'#FFCE56'
		],
		hoverBackgroundColor: [
		'#FF6384',
		'#36A2EB',
		'#FFCE56'
		]
	}]
}; */

export default class DiemDoughnut extends React.Component {

	setData = (label, data) => ({
		labels: label,
		datasets: [{
			data: data,
			backgroundColor: [
				'#FF6384',
				'#36A2EB',
				'#FFCE56'
			],
			hoverBackgroundColor: [
				'#FF6384',
				'#36A2EB',
				'#FFCE56'
			]
		}]
	})

	render() {
		return (
			<div>
				<Doughnut
					data={this.setData(this.props.nameArray, this.props.timeSpentArray)}
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

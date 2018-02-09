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

	setColors = () => {
		const remainderIndex = this.props.nameArray.lastIndexOf('remainder');
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

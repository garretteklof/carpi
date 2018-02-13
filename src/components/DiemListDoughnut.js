import React from 'react';
import Doughnut from 'react-chartjs-2';
import { groupData } from '../utils/utils';

export default class DiemListDoughnut extends React.Component {

	consolidateDiemsToGroupArray = (diems) => {
		const allActivities = diems.map(({activities}) => activities);
		const flattenedActivities = [].concat(...allActivities);
		return Array.from(groupData(flattenedActivities, ({name}) => name))
			.map((collection) => ({ 
				name: collection[0], 
				timeSpent: collection[1].map(({timeSpent}) => timeSpent).reduce((a,b) => a + b) 
			}));
	}

	calculateRemainder = (diems) => diems.map(({remainder}) => remainder).reduce((a,b) => a + b, 0)

	createNameArray = (diems) => {
		const remainder = this.calculateRemainder(diems);
		const nameArray = this.consolidateDiemsToGroupArray(diems).map(({name}) => name);
		return remainder > 0 ? [...nameArray, 'unrecorded'] : [...nameArray];
	}

	createTimeSpentArray = (diems) => {
		const remainder = this.calculateRemainder(diems);
		const timeSpentArray = this.consolidateDiemsToGroupArray(this.props.diems).map(({timeSpent}) => timeSpent);
		return remainder > 0 ? [...timeSpentArray, remainder] : [...timeSpentArray];
	}


	setColors = () => {
		const remainderIndex = this.createNameArray(this.props.diems).lastIndexOf('unrecorded');
		const remainderColor = '#CACFD6';
		const colors = this.createNameArray(this.props.diems).map(() => (
			'#' + ("000000" + Math.random().toString(16).slice(2, 8).toUpperCase()).slice(-6)));
		/* random color generator -- overkill and unneeded, just for development */
		if ( remainderIndex !== -1) {
			colors.splice(remainderIndex, 0, remainderColor);
		}
		console.log(colors);
		return colors;
	}

	setData = (labels, data) => {
		return {
			labels,
			datasets: [{
				data,
				backgroundColor: this.setColors(),
				hoverBackgroundColor: this.setColors()
			}]
		};
	}

	render() {
		const {diems} = this.props;
		return (
			<div>
				<Doughnut
					data={this.setData(this.createNameArray(diems), 
						this.createTimeSpentArray(diems))}
					width={400}
					height={400}
					options={{
						maintainAspectRatio: false
					}}		
				/>
			</div>
		)
	}
}
import React from 'react';
import moment from 'moment';
import ActivityInput from './ActivityInput';

export default class DiemForm extends React.Component {

	state = {
		date: moment(),
		activities: [{ name: 'sleeping', timeSpent: 8 },{name: 'detracting', timeSpent: 16 }],
		addActivity: '',
		error: ''
	}

	onActivityChange = (e) => {
		const addActivity = e.target.value;
		this.setState(() => ({ addActivity }));
	}

	addActivityInput = (e) => {
		e.preventDefault();
		const name = this.state.addActivity;
		if (!name) {
			this.setState(() => ({ error: 'Can\'t be blank'}));
		} else if (!name.toLowerCase().match(/ing\b/)) {
			this.setState(() => ({ error: '*GRAMMAR POLICE* Please use a present participle [ word that ends in \'-ing\' ]'}));
		}	else if (this.state.activities.length >= 5) {
			this.setState(() => ({ error: 'Max of five'}));
		} else {
			this.setState({
				activities: [...this.state.activities, { name, timeSpent: 0}],
				addActivity: '',
				error: ''
			});
		}
	}

	onTimeSpentChange = (index) => (value) => {
		const activities = [...this.state.activities];
		activities[index].timeSpent = value;
		this.setState(() => ({ activities }));
	}

	removeActivityInput = (index) => (e) => {
		e.preventDefault();
		const activities = [...this.state.activities];
		activities.splice(index,1);
		this.setState(() => ({ activities, error:''}));
	}
	checkTotalTime = () => {
		const totalTime = this.state.activities.map((activity) => 
			activity.timeSpent).reduce((a,b) => a + b);
		if (totalTime > 24) {
			// DO SOMETHNG (???)
			console.log(totalTime);
		} 
	}

	onSubmit = (e) => {

	}

	render() {
		return (
			<div>
				<form onSubmit={this.onSubmit}>
				{ this.state.error && <p>{this.state.error}</p> }
					<input
						type='text' 
						placeholder='Add Activity'
						autoFocus
						value={this.state.addActivity}
						onChange={this.onActivityChange}
					/>
					<button onClick={this.addActivityInput}>Add Activity</button>
				{this.state.activities.map((activity, index) =>
						<ActivityInput
							key={index}
							index={index}
							activity={activity}
							onTimeSpentChange={this.onTimeSpentChange}
							removeActivityInput={this.removeActivityInput}
							checkTotalTime={this.checkTotalTime}
						/>
					)}
					<button>Submit</button>
				</form>	
			</div>
		)
	}
}




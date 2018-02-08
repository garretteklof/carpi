import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import ActivityInput from './ActivityInput';

export default class DiemForm extends React.Component {

	state = {
		date: moment(),
		activities: [{ name: 'Sleeping', timeSpent: 8 },{name: 'Detracting', timeSpent: 16 }],
		addActivity: '',
		calendarFocused: false,
		step: 1,
		error: ''
	}

	onDateChange = (date) => {
		if (date) {
			this.setState(() => ( { date }));
		}
	}

	onFocusChange = ({ focused }) => {
		this.setState(() => ({ calendarFocused: focused }));
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

	totalTime = () => {
		if (this.state.activities.length > 0) {
			return this.state.activities.map((activity) => 
				activity.timeSpent).reduce((a,b) => a + b);
		}
	}

	checkTotalTime = () => {
		const totalTime = this.totalTime();
		if (totalTime > 24) {
			// DO SOMETHNG (???)
			console.log(totalTime);
		} 
	}

	onSubmit = (e) => {
		e.preventDefault();
		if (this.state.activities.length === 0) {
			this.setState(() => ({error: 'Need at least one activity'}));
		} else if (this.totalTime() > 24 ) {
			this.setState(() => ({error: 'Total time can\'t be greater than 24 hours'}));
		} else {
			this.setState(() => ({error: '', step: 1}));
			this.props.onSubmit({
				date: this.state.date.valueOf(),
				activities: this.state.activities
			});
		}
	}

	render() {
		return (
			<div>
				<form onSubmit={this.onSubmit}>
				{ this.state.error && <p>{this.state.error}</p> }
				{ this.props.error && <p>{this.props.error}</p> }
				{this.state.step === 1 && ( 
					<div>
						<SingleDatePicker
							date={this.state.date}
							onDateChange={this.onDateChange}
							focused={this.state.calendarFocused}
							onFocusChange={this.onFocusChange}
							numberOfMonths={1}
							isOutsideRange={() => false}
							block
						/>
						<button onClick={() => this.setState(() => ({step:2}))}>Next</button>
					</div>
				)}
				{this.state.step === 2 && (
					<div>
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
					</div>
				)}
				</form>	
			</div>
		)
	}
}



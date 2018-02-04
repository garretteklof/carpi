import React from 'react';
import ActivityInput from './ActivityInput';

export default class Activites extends React.Component {

	state = {
		activities: ['sleeping', 'detracting'],
		activityInput: ''
	}

	onChange = (e) => {
		const activityInput = e.target.value;
		this.setState(() => ({ activityInput }));
	}

	handleActivityClick = (e) => {
		e.preventDefault();
		const activity = this.state.activityInput;
		this.setState({
			activities: [...this.state.activities, activity],
			activityInput: ''
		});
	}

	render() {
		return (
			<div>
				<form>
					<input 
						type='text' 
						placeholder='Add Activity'
						autoFocus
						onChange={this.onChange}
						value={this.state.activityInput}
					/>
					<button onClick={this.handleActivityClick}> CLICK ME </button>
					{this.state.activities.map((activity) => <ActivityInput key={activity} activity={activity} />)}
				</form>	
				{this.state.activities}
			</div>
		)
	}
}



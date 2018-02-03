import React from 'react';
import moment from 'moment';

export default class DiemForm extends React.Component {
	state = {
		reading: '',
		writing: '',
		exercising: '',
		detracting: '',
		createdAt: moment()
	}

	onReadingChange = (e) => {
		const reading = e.target.value;
		this.setState(() => ({ reading }));
	}

	onWritingChange = (e) => {
		const writing = e.target.value;
		this.setState(() => ({ writing }));
	}

	onExercisingChange = (e) => {
		const exercising = e.target.value;
		this.setState(() => ({ exercising }));
	}

	onDetractingChange = (e) => {
		const detracting = e.target.value;
		this.setState(() => ({ detracting}));
	}

	onSubmit = (e) => {
		e.preventDefault();
		this.props.onSubmit({
			reading: parseFloat(this.state.reading.split(':')[0] * 60) + parseFloat(this.state.reading.split(':')[1]),
			writing: parseFloat(this.state.writing.split(':')[0] * 60) + parseFloat(this.state.writing.split(':')[1]),
			exercising: parseFloat(this.state.exercising.split(':')[0] * 60) + parseFloat(this.state.exercising.split(':')[1]),
			detracting: parseFloat(this.state.detracting.split(':')[0] * 60) + parseFloat(this.state.detracting.split(':')[1]),
			createdAt: this.state.createdAt.valueOf()
		});
	}

	render() {
		return (
			<div>
				<form onSubmit={this.onSubmit}>
					<input 
						type='text' 
						placeholder='HH:mm' 
						pattern="([01]?[0-9]|2[0-3]):[0-5][0-9]" 
						id="24h"
						autoFocus
						value={this.state.reading}
						onChange={this.onReadingChange}
					/>
					<input 
						type='text' 
						placeholder='HH:mm' 
						pattern="([01]?[0-9]|2[0-3]):[0-5][0-9]" 
						id="24h"
						value={this.state.writing}
						onChange={this.onWritingChange}
					/>
					<input 
						type='text' 
						placeholder='HH:mm'
						pattern="([01]?[0-9]|2[0-3]):[0-5][0-9]" 
						id="24h"
						value={this.state.exercising}
						onChange={this.onExercisingChange}
					/>
					<input 
						type='text' 
						placeholder='HH:mm'
						pattern="([01]?[0-9]|2[0-3]):[0-5][0-9]" 
						id="24h"
						value={this.state.detracting}
						onChange={this.onDetractingChange}
					/>
					<input type='text' placeholder='Date' />
					<button>Submit</button>
				</form>
			</div>
		)
	}
}



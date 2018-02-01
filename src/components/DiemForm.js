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
		console.log(this.state);
		this.props.onSubmit({
			reading: this.state.reading,
			writing: this.state.writing,
			exercising: this.state.exercising,
			detracting: this.state.detracting,
			createdAt: this.state.createdAt.valueOf()
		});
	}

	render() {
		return (
			<div>
				<form onSubmit={this.onSubmit}>
					<input type='text' placeholder='Reading' />
					<input type='text' placeholder='Writing' />
					<input type='text' placeholder='Exercising' />
					<input type='text' placeholder='Detracting' />
					<input type='text' placeholder='Date' />
					<button>Submit</button>
				</form>
			</div>
		)
	}
}



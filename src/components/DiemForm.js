import React from 'react';

export default class DiemForm extends React.Component {
	render() {
		return (
			<div>
				<form>
					<input type='text' placeholder='Reading' />
					<input type='text' placeholder='Writing' />
					<input type='text' placeholder='Exercising' />
					<input type='text' placeholder='Detracting' />
					<input type='text' />
					<button>Submit</button>
				</form>
			</div>
		)
	}
}



import React from 'react';
import { connect } from 'react-redux';
import DiemForm from './DiemForm';
import { addDiem } from '../actions/diems';

export class AddDiem extends React.Component {
	
	onSubmit = (diem) => {
		this.props.addDiem(diem);
		this.props.history.push('/dashboard');
	}

	render() {
		return (
			<div>
				<DiemForm onSubmit={this.onSubmit} />
			</div>
		)
	}
};

const mapDispatchToProps = (dispatch) => ({
	addDiem: (diem) => dispatch(addDiem(diem))
});

export default connect(undefined, mapDispatchToProps)(AddDiem);
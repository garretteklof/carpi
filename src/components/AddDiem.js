import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import DiemForm from './DiemForm';
import { addDiem } from '../actions/diems';

export class AddDiem extends React.Component {

	state = {
		error: ''
	}
	
	onSubmit = (diem) => {
		const index = this.props.diems.findIndex((storeDiem) => (
			moment(storeDiem.date).isSame(moment(diem.date), 'day')));
		if (index === -1) {
			this.props.addDiem(diem)
			this.props.history.push('/dashboard')
		} else {
			this.setState(() => ({error: 'There is an error'}))
			console.log(index);
		}
	}

	render() {
		return (
			<div>
				<DiemForm onSubmit={this.onSubmit} error={this.state.error}/>
			</div>
		)
	}
}

const mapStateToProps = (state) => ({
	diems: state.diems
});

const mapDispatchToProps = (dispatch) => ({
	addDiem: (diem) => dispatch(addDiem(diem))
});

export default connect(mapStateToProps, mapDispatchToProps)(AddDiem);
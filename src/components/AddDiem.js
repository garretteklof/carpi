import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import DiemForm from './DiemForm';
import { startAddDiem, editDiem } from '../actions/diems';

export class AddDiem extends React.Component {

	state = {
		error: ''
	}
	
	onSubmit = (diem) => {
		const index = this.props.diems.findIndex((storeDiem) => (
			moment(storeDiem.date).isSame(moment(diem.date), 'day')));
		if (index === -1) {
			this.props.startAddDiem(diem);
			this.props.history.push('/dashboard');
		} else {
			this.setState(() => ({ error: 'Already recorded this date!'}));
		}
	}

	render() {
		return (
			<div className='section'>
				<div className='container'>
					<DiemForm onSubmit={this.onSubmit} error={this.state.error} />
				</div>
			</div>
		)
	}
}

const mapStateToProps = (state) => ({
	diems: state.diems
});

const mapDispatchToProps = (dispatch) => ({
	startAddDiem: (diem) => dispatch(startAddDiem(diem)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddDiem);
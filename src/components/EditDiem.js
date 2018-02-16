import React from 'react';
import { connect } from 'react-redux';
import { startRemoveDiem, startEditDiem } from '../actions/diems';
import DiemForm from './DiemForm';

export class EditDiem extends React.Component {
	onSubmit = (diem) => {
		this.props.startEditDiem(this.props.diem.id, diem);
		this.props.history.push('/');
	}
	onRemove = () => {
		this.props.startRemoveDiem({id: this.props.diem.id});
		this.props.history.push('/');
	}
	render() {
		return (
			<div>
				<button onClick={this.onRemove}>Remove</button>
				<DiemForm onSubmit={this.onSubmit} diem={this.props.diem} />
			</div>
		)
	}
}
const mapStateToProps = (state, props) => ({
	diem: state.diems.find((diem) => diem.id === props.match.params.id)
});
const mapDispatchToProps = (dispatch) => ({
	startEditDiem: (id, diem) => dispatch(startEditDiem(id, diem)),
	startRemoveDiem: (diem) => dispatch(startRemoveDiem(diem))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditDiem);
import React from 'react';
import { connect } from 'react-redux';
import { removeDiem, editDiem } from '../actions/diems';
import DiemForm from './DiemForm';

export class EditDiem extends React.Component {
	onSubmit = (diem) => {
		this.props.editDiem(this.props.diem.id, diem);
		this.props.history.push('/');
	}
	onRemove = () => {
		this.props.removeDiem({id: this.props.diem.id});
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
	editDiem: (id, diem) => dispatch(editDiem(id, diem)),
	removeDiem: (diem) => dispatch(removeDiem(diem))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditDiem);
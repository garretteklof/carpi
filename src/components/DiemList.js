import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import DiemListItem from './DiemListItem';
import selectDiems from '../selectors/diems';


export const DiemList = ({diems}) => (
	<div>
		{diems.length === 0 ? (
			<h4 className='subtitle is-4'>No diems.</h4>
			) : (
			diems.map((diem) => ( 
				<DiemListItem 
					key={diem.id} 
					{...diem}
				/>
		)))}
	</div>
);

const mapStateToProps = (state) => {
	return {
		diems: selectDiems(state.diems, state.filters)
	};
};

export default connect(mapStateToProps)(DiemList);
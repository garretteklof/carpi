import React from 'react';
import { connect } from 'react-redux';
import DiemListItem from './DiemListItem';
import selectDiems from '../selectors/diems';

export const DiemList = (props) => (
	<div>
			{props.diems.map((diem) => ( 
				<DiemListItem 
					key={diem.id} 
					{...diem}
				/>
			))}	
	</div>
);

const mapStateToProps = (state) => {
	return {
		diems: selectDiems(state.diems, state.filters)
	};
};

export default connect(mapStateToProps)(DiemList);
import React from 'react';
import { connect } from 'react-redux';
import DiemListItem from './DiemListItem';

export const DiemList = (props) => (
	<div>
		{
			(
				props.diems.map((diem) => ( 
					<DiemListItem key={diem.id} {...diem} 
					/>
				))
			)
		}
	</div>
);

const mapStateToProps = (state) => {
	return {
		diems: state.diems
	};
};

export default connect(mapStateToProps)(DiemList);
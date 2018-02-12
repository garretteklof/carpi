import React from 'react';
import { connect } from 'react-redux';
import DiemListItem from './DiemListItem';
import { diemDateMatch } from '../selectors/diems';
import DiemListDoughnut from './DiemListDoughnut';

export const DiemList = (props) => (
	<div>
			{/*{props.diems.map((diem) => ( 
				<DiemListItem 
					key={diem.id} 
					{...diem}
				/>
			))}	*/}
			<DiemListDoughnut diems={props.diems} />
	</div>
);

const mapStateToProps = (state) => {
	return {
		diems: diemDateMatch(state.diems, state.filters)
	};
};

export default connect(mapStateToProps)(DiemList);
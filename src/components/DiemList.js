import React from 'react';
import { connect } from 'react-redux';
import DiemListItem from './DiemListItem';


export class DiemList extends React.Component {

	//timeSpentToArray = (activities) => activities.map(({timeSpent}) => timeSpent);

	render() {
		return (
			<div>
			{
				(
					this.props.diems.map((diem) => ( 
						<DiemListItem 
							key={diem.id} 
							//timeSpentToArray={this.timeSpentToArray}
							{...diem}
						/>
					))
				)
			}
			
			</div>
		)
	}
} 


const mapStateToProps = (state) => {
	return {
		diems: state.diems
	};
};

export default connect(mapStateToProps)(DiemList);
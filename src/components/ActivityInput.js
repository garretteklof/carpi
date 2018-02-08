import React from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

const wrapperStyle = { width: 400, margin: 50 };

export const ActivityInput = (props) => {
	const { index, activity: { name, timeSpent }, onTimeSpentChange, removeActivityInput, checkTotalTime } = props;
	return (
		<div>
			<div style={wrapperStyle}>
      	<Slider 
      		min={0} 
      		max={24}  
      		step={0.25} 
      		marks={
      			{
      				0: "0",
      				8: "8",
      				16: "16",
      				24: "24"
      			}
      		}
      		value={timeSpent}
      		onChange={onTimeSpentChange(index)}
      		onAfterChange={checkTotalTime}
      	/>
    	</div>
    	<label>{name}</label>
    	{ timeSpent }
			<button onClick={removeActivityInput(index)}>Remove</button>
		</div>	
	);
}; 

export default ActivityInput;
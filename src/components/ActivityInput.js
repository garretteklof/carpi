import React from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

export const ActivityInput = (props) => {
	const { index, activity: { name, timeSpent }, onTimeSpentChange, removeActivityInput, checkTotalTime } = props;
	return (
		<div className='slider'>
      <div className='slider--delete'>
        <a className='delete' onClick={removeActivityInput(index)}></a>
      </div>
      <Slider 
        className='slider--track'
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
      <div className ='slider--level'>
        <label className='level-item subtitle is-4'>{name}</label>
        <p className='level-item subtitle is-2'>{timeSpent}</p>
      </div>
    </div>
	);
}; 

export default ActivityInput;
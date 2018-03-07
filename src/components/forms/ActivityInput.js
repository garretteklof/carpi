import React from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import { setColor } from '../../utils/tags';

export const ActivityInput = (props) => {
  const {
    index,
    activity: { name, timeSpent, category },
    onTimeSpentChange,
    removeActivityInput
  } = props;
  return (
    <div className="slider">
      <Slider
        className="slider--track"
        trackStyle={{ backgroundColor: '#1dd3b0', height: 10 }}
        railStyle={{ backgroundColor: '#F7FFF7', height: 10 }}
        handleStyle={{
          borderColor: '#1dd3b0',
          borderWidth: 5,
          height: 20,
          width: 20,
          marginLeft: -10,
          marginTop: -6,
          backgroundColor: 'white'
        }}
        dotStyle={{ display: 'none' }}
        min={0}
        max={24}
        step={0.25}
        marks={{
          0: { label: '0', style: { fontSize: 16, marginTop: 1 } },
          8: { label: '8', style: { fontSize: 16, marginTop: 1 } },
          16: { label: '16', style: { fontSize: 16, marginTop: 1 } },
          24: { label: '24', style: { fontSize: 16, marginTop: 1 } }
        }}
        value={timeSpent}
        onChange={onTimeSpentChange(index)}
      />
      <div className="slider--level">
        <label className="level-item subtitle is-4">{name}</label>
        <p className="level-item subtitle is-2">{timeSpent}</p>
        <div className="level-item">
          <span className={`is-large ${setColor(category)}`}>{category}</span>
        </div>
        <a className="level-item delete" onClick={removeActivityInput(index)} />
      </div>
    </div>
  );
};

export default ActivityInput;

import React from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

const tagColor = (category) => {
  switch (category) {
    case 'Contributor':
      return 'tag is-large is-canary';
    case 'Inhibitor':
      return 'tag is-large is-orange-soda';
    case 'Basic Necessity':
      return 'tag is-large is-cerulean';
    default:
      return '';
  }
};

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
        min={0}
        max={24}
        step={0.25}
        marks={{
          0: '0',
          8: '8',
          16: '16',
          24: '24'
        }}
        value={timeSpent}
        onChange={onTimeSpentChange(index)}
      />
      <div className="slider--level">
        <label className="level-item subtitle is-4">{name}</label>
        <p className="level-item subtitle is-2">{timeSpent}</p>
        <div className="level-item">
          <span className={tagColor(category)}>{category}</span>
        </div>
        <a className="level-item delete" onClick={removeActivityInput(index)} />
      </div>
    </div>
  );
};

export default ActivityInput;

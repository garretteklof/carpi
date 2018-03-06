import React from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import { setColor } from '../../utils/tags';

export const SplashSlider = ({ index, name, category, timeSpent, onChange }) => (
  <div className="slider">
    <Slider
      className="slider--track"
      min={0}
      max={24}
      step={0.25}
      marks={{ 0: '0', 8: '8', 16: '16', 24: '24' }}
      value={timeSpent}
      onChange={onChange(index)}
    />
    <div className="slider--level">
      <label className="level-item subtitle is-4">{name}</label>
      <p className="level-item subtitle is-2">{timeSpent}</p>
      <div className="level-item">
        <span className={`is-small ${setColor(category)}`}>{category}</span>
      </div>
    </div>
  </div>
);

export default SplashSlider;

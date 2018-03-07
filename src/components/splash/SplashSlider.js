import React from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import { setColor } from '../../utils/tags';

export const SplashSlider = ({ index, name, category, timeSpent, onChange }) => (
  <div className="slider">
    <Slider
      className="slider--track"
      trackStyle={{ backgroundColor: '#fff', height: 10 }}
      railStyle={{ backgroundColor: '#F7FFF7', height: 10 }}
      handleStyle={{
        borderColor: '#fff',
        borderWidth: 5,
        height: 20,
        width: 20,
        marginLeft: -10,
        marginTop: -6,
        backgroundColor: '#1DD3B0'
      }}
      dotStyle={{ display: 'none' }}
      min={0}
      max={24}
      step={0.25}
      marks={{
        0: { label: '0', style: { fontSize: 16, marginTop: 1, color: 'white' } },
        8: { label: '8', style: { fontSize: 16, marginTop: 1, color: 'white' } },
        16: { label: '16', style: { fontSize: 16, marginTop: 1, color: 'white' } },
        24: { label: '24', style: { fontSize: 16, marginTop: 1, color: 'white' } }
      }}
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

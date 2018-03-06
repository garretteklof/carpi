import React from 'react';
import SplashSlider from './SplashSlider';
import SplashDoughnut from './SplashDoughnut';

export const SplashCarouselSlide3 = ({
  forward,
  backward,
  sliderTimeSpent,
  onSliderChange,
  doughnutError,
  setDoughnutData
}) => (
  <div className="column is-12">
    <h1 className="title is-1 has-text-centered is-marginless"> Record The Time Spent On Each</h1>
    <p className="is-size-4 has-text-centered">(Try it!)</p>
    <div className="columns is-centered">
      <div className="column is-two-fifths">
        <SplashSlider
          index={0}
          name="Working Day Job"
          timeSpent={sliderTimeSpent[0]}
          category="Basic Necessity"
          onChange={onSliderChange}
        />
        <SplashSlider
          index={1}
          name="Writing That Symphony"
          timeSpent={sliderTimeSpent[1]}
          category="Contributor"
          onChange={onSliderChange}
        />
        <SplashSlider
          index={2}
          name="Watching Netflix"
          timeSpent={sliderTimeSpent[2]}
          category="Inhibitor"
          onChange={onSliderChange}
        />
        <SplashSlider
          index={3}
          name="Sleeping"
          timeSpent={sliderTimeSpent[3]}
          category="Basic Necessity"
          onChange={onSliderChange}
        />
      </div>
      <div className="column is-half">
        <div className="splash-doughnut__form">
          <SplashDoughnut
            error={doughnutError}
            setData={setDoughnutData}
            options={{ maintainAspectRatio: false, legend: { display: false } }}
          />
        </div>
      </div>
    </div>
    <div className="splash--icons">
      <a className="icon is-large splash--icon__left" onClick={backward}>
        <i className="fas fa-3x fa-arrow-circle-left" />
      </a>
      <a className="icon is-large splash--icon__right" onClick={forward}>
        <i className="fas fa-3x fa-arrow-circle-right" />
      </a>
    </div>
  </div>
);

export default SplashCarouselSlide3;

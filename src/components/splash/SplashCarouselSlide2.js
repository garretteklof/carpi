import React from 'react';
import Typist from 'react-typist';
import { SplashSingleDatePicker } from './SplashDatePicker';
import { setColor, injectBlurb } from '../../utils/tags';

export const SplashCarouselSlide2 = ({ forward, backward, category, flipCategory }) => (
  <div className="column is-narrow">
    {/* <h1 className="title is-1 has-text-centered">Getting Started</h1> */}
    <div className="slide2--wrapper">
      <span className="title is-1">Select a day :</span>
      <SplashSingleDatePicker />
    </div>
    <div className="slide2--wrapper">
      <span className="title is-1">Type an activity :</span>
      <div className="input slide2--input" disabled>
        <Typist startDelay={2000} onLineTyped={flipCategory} cursor={{ hideWhenDone: true }}>
          <span>Writing That Symphony</span>
          <Typist.Backspace count={21} delay={3000} />
          <span>Watching Netflix</span>
          <Typist.Backspace count={16} delay={3000} />
          <span>Sleeping</span>
          <Typist.Backspace count={8} delay={2000} />
          <span>Running</span>
          <Typist.Backspace count={7} delay={1000} />
          <span>Commuting</span>
          <Typist.Backspace count={9} delay={1000} />
          <span>Studying For MCAT</span>
          <Typist.Backspace count={17} delay={1000} />
          <span>Working Day Job</span>
          <Typist.Backspace count={15} delay={1000} />
          <span>Doing Absolutely Nothing</span>
        </Typist>
      </div>
    </div>
    <div className="slide2--wrapper">
      <span className="title is-1">Tag it :</span>
      <div className="select">
        <select value={category} readOnly disabled>
          <option value="Contributor">Contributor</option>
          <option value="Inhibitor">Inhibitor</option>
          <option value="Basic Necessity">Basic Necessity</option>
        </select>
      </div>
      <p className="slide2--blurb">{injectBlurb(category)}</p>
      <div className={setColor(category)}>{category}</div>
    </div>
    <div className="slide2--wrapper">
      <span className="title is-1">Add it :</span>
      <button className="button is-primary is-inverted is-outlined slide2--button">
        Add Activity
      </button>
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

export default SplashCarouselSlide2;

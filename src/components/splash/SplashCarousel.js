import React from 'react';
import SplashCarouselSlide1 from './SplashCarouselSlide1';
import SplashCarouselSlide2 from './SplashCarouselSlide2';
import SplashCarouselSlide3 from './SplashCarouselSlide3';
import SplashCarouselSlide4 from './SplashCarouselSlide4';
import SplashCarouselSlide5 from './SplashCarouselSlide5';
import SplashCarouselSlide6 from './SplashCarouselSlide6';
import SplashCarouselSlide7 from './SplashCarouselSlide7';

import { hexColors } from '../../utils/colors';

export default class SplashCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.defaultState = {
      step: 1,
      activeCategory: 'Contributor',
      sliderTimeSpent: [8.5, 0.75, 4, 6],
      remainder: 4.75,
      doughnutError: false
    };
    this.state = this.defaultState;
  }

  pushCarouselForward = () => {
    window.scrollTo(0, 0);
    this.setState(({ step }) => ({
      step: step + 1
    }));
  };
  pushCarouselBackward = () => {
    window.scrollTo(0, 0);
    this.setState(({ step }) => ({
      step: step - 1
    }));
  };
  flipCategory = (line) => {
    switch (line) {
      case 'Writing That Symphony': {
        return this.setState(() => ({
          activeCategory: 'Contributor'
        }));
      }
      case 'Watching Netflix': {
        return this.setState(() => ({ activeCategory: 'Inhibitor' }));
      }
      case 'Sleeping': {
        return this.setState(() => ({
          activeCategory: 'Basic Necessity'
        }));
      }
      case 'Running': {
        return this.setState(() => ({
          activeCategory: 'Contributor'
        }));
      }
      case 'Commuting': {
        return this.setState(() => ({
          activeCategory: 'Basic Necessity'
        }));
      }
      case 'Studying For MCAT': {
        return this.setState(() => ({
          activeCategory: 'Contributor'
        }));
      }
      case 'Working Day Job': {
        return this.setState(() => ({
          activeCategory: 'Basic Necessity'
        }));
      }
      case 'Doing Absolutely Nothing': {
        return this.setState(() => ({ activeCategory: 'Inhibitor' }));
      }
      default: {
        return '';
      }
    }
  };
  onSliderChange = (index) => (event) => {
    const sliderTimeSpent = this.state.sliderTimeSpent.map((prevValue, i) => {
      if (i === index) {
        return event;
      }
      return prevValue;
    });
    this.setState({ sliderTimeSpent }, () => {
      const total = this.state.sliderTimeSpent.reduce((a, b) => a + b);
      const remainder = 24 - total;
      if (total > 24) {
        this.setState(() => ({ doughnutError: true }));
      } else {
        this.setState(() => ({ remainder, doughnutError: false }));
      }
    });
  };

  setDoughnutData = (error) => {
    const data = {
      labels: [
        'Working Day Job',
        'Writing That Symphony',
        'Watching Netflix',
        'Sleeping',
        'untracked'
      ],
      datasets: [
        {
          data: [...this.state.sliderTimeSpent, this.state.remainder],
          backgroundColor: [
            hexColors.cerulean,
            hexColors.canary,
            hexColors.orangesoda,
            hexColors.cerulean,
            hexColors.gainsboro
          ],
          hoverBackgroundColor: [
            hexColors.cerulean_hover,
            hexColors.canary_hover,
            hexColors.orangesoda_hover,
            hexColors.cerulean_hover,
            hexColors.gainsboro_hover
          ]
        }
      ]
    };

    const errorData = {
      labels: ['> 24 Hrs'],
      datasets: [
        {
          data: [this.state.sliderTimeSpent.reduce((a, b) => a + b)],
          backgroundColor: ['#FF0000'],
          hoverBackgroundColor: ['#FF0000']
        }
      ]
    };
    if (error) {
      return errorData;
    }
    return data;
  };

  setRangeDoughnutData = (error) => {
    const data = {
      labels: [
        'Working Day Job',
        'Writing That Symphony',
        'Watching Netflix',
        'Sleeping',
        'Running',
        'Cooking',
        'Playing Chess',
        'Commuting',
        'Studying For MCAT',
        'Drinking Beer',
        'Ugly Crying',
        'untracked'
      ],
      datasets: [
        {
          data: [42.5, 4, 9, 35, 3, 5, 4, 5, 6, 3, 2.5, 1],
          backgroundColor: [
            hexColors.cerulean,
            hexColors.canary,
            hexColors.orangesoda,
            hexColors.cerulean,
            hexColors.canary,
            hexColors.cerulean,
            hexColors.orangesoda,
            hexColors.cerulean,
            hexColors.canary,
            hexColors.cerulean,
            hexColors.orangesoda,
            hexColors.gainsboro
          ],
          hoverBackgroundColor: [
            hexColors.cerulean_hover,
            hexColors.canary_hover,
            hexColors.orangesoda_hover,
            hexColors.cerulean_hover,
            hexColors.canary_hover,
            hexColors.cerulean,
            hexColors.orangesoda_hover,
            hexColors.cerulean_hover,
            hexColors.canary_hover,
            hexColors.cerulean_hover,
            hexColors.orangesoda_hover,
            hexColors.gainsboro_hover
          ]
        }
      ]
    };
    return data;
  };
  displayCarouselSlide = () => {
    switch (this.state.step) {
      case 1: {
        return <SplashCarouselSlide1 forward={this.pushCarouselForward} />;
      }
      case 2: {
        return (
          <SplashCarouselSlide2
            forward={this.pushCarouselForward}
            backward={this.pushCarouselBackward}
            category={this.state.activeCategory}
            flipCategory={this.flipCategory}
          />
        );
      }
      case 3: {
        return (
          <SplashCarouselSlide3
            forward={this.pushCarouselForward}
            backward={this.pushCarouselBackward}
            sliderTimeSpent={this.state.sliderTimeSpent}
            onSliderChange={this.onSliderChange}
            setDoughnutData={this.setDoughnutData}
            doughnutError={this.state.doughnutError}
          />
        );
      }
      case 4: {
        return (
          <SplashCarouselSlide4
            forward={this.pushCarouselForward}
            backward={this.pushCarouselBackward}
            setDoughnutData={this.setDoughnutData}
          />
        );
      }
      case 5: {
        return (
          <SplashCarouselSlide5
            forward={this.pushCarouselForward}
            backward={this.pushCarouselBackward}
          />
        );
      }
      case 6: {
        return (
          <SplashCarouselSlide6
            forward={this.pushCarouselForward}
            backward={this.pushCarouselBackward}
          />
        );
      }
      case 7: {
        return <SplashCarouselSlide7 />;
      }
      default: {
        return <SplashCarouselSlide1 forward={this.pushCarouselForward} />;
      }
    }
  };
  render() {
    return (
      <div className="container">
        <div className="columns is-centered">{this.displayCarouselSlide()}</div>
      </div>
    );
  }
}

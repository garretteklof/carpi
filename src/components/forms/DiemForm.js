import React from 'react';
import { SingleDatePicker } from 'react-dates';
import update from 'immutability-helper';
import moment from 'moment';
import ActivityInput from './ActivityInput';
import DiemDoughnut from '../graphs/DiemDoughnut';

const activitiesDefault = [
  { name: 'Sleeping', timeSpent: 8, category: 'Basic Necessity' },
  { name: 'Writing A Symphony', timeSpent: 0.5, category: 'Contributor' },
  { name: 'Procrastinating', timeSpent: 15.5, category: 'Inhibitor' }
];

export default class DiemForm extends React.Component {
  constructor(props) {
    super(props);
    this.defaultState = {
      date: props.diem ? moment(props.diem.date) : moment(),
      activities: props.diem ? props.diem.activities : activitiesDefault,
      remainder: props.diem ? props.diem.remainder : 0,
      addActivityText: '',
      addActivityCat: 'Contributor',
      calendarFocused: false,
      error: []
    };
    this.state = this.defaultState;
  }

  resetStateComplete = () => {
    this.setState(() => ({ ...this.defaultState, date: null, activities: [], remainder: 24 }));
  };

  onDateChange = (date) => {
    const error = update(this.state.error, { date: { $set: '' } });
    this.setState(() => ({ date, error }));
  };

  onFocusChange = ({ focused }) => {
    this.setState(() => ({ calendarFocused: focused }));
  };

  onActivityNameChange = (e) => {
    const addActivityText = e.target.value;
    this.setState(() => ({ addActivityText }));
  };

  onActivityCategoryChange = (e) => {
    const addActivityCat = e.target.value;
    this.setState(() => ({ addActivityCat }));
  };

  addActivityInput = (e) => {
    e.preventDefault();
    const category = this.state.addActivityCat;
    const name = this.state.addActivityText
      .trim()
      .replace(/ +/g, ' ')
      .replace(/\w\S*/g, (input) => input.charAt(0).toUpperCase() + input.substr(1).toLowerCase());
    if (!name) {
      const error = update(this.state.error, { input: { $set: "Can't be blank!" } });
      this.setState(() => ({ error }));
    } else if (!name.match(/^[ a-zA-Z0-9]{0,25}$/)) {
      const error = update(this.state.error, {
        input: { $set: 'Please keep it concise with no special characters!' }
      });
      this.setState(() => ({ error }));
    } else if (!name.match(/^.*(ing\b|ing\b\s.*)$/)) {
      const error = update(this.state.error, {
        input: {
          $set:
            "🚨GRAMMAR POLICE 🚨 use a present participle! (ex. 'exercising', 'studying biology')"
        }
      });
      this.setState(() => ({ error }));
    } else if (this.state.activities.find((activity) => activity.name === name)) {
      const error = update(this.state.error, { input: { $set: 'Already entered!' } });
      this.setState(() => ({ error }));
    } else if (this.state.activities.length >= 6) {
      const error = update(this.state.error, { input: { $set: 'Max of six!' } });
      this.setState(() => ({ error }));
    } else {
      this.setState({
        activities: [...this.state.activities, { name, category, timeSpent: 0 }],
        addActivityCat: 'Contributor',
        addActivityText: '',
        error: []
      });
    }
  };

  removeActivityInput = (index) => (e) => {
    e.preventDefault();
    const activities = [...this.state.activities];
    const remainder = this.state.remainder + activities[index].timeSpent;
    activities.splice(index, 1);
    this.setState(() => ({ activities, remainder, error: '' }));
  };

  onTimeSpentChange = (index) => (value) => {
    const activities = update([...this.state.activities], {
      [index]: { timeSpent: { $set: value } }
    });
    this.setState({ activities }, () => {
      const totalTime = this.totalTime();
      const remainder = 24 - totalTime;
      if (totalTime > 24) {
        const error = update(this.state.error, { doughnut: { $set: '>24 Hours!' } });
        this.setState(() => ({ error }));
      } else {
        this.setState(() => ({ remainder, error: [] }));
      }
    });
  };

  totalTime = () =>
    this.state.activities.length > 0 &&
    this.state.activities.map(({ timeSpent }) => timeSpent).reduce((a, b) => a + b);

  onSubmit = (e) => {
    e.preventDefault();
    const index = this.props.diems.findIndex((diem) =>
      moment(diem.date).isSame(moment(this.state.date), 'day')
    );
    if (index !== -1) {
      const error = update(this.state.error, { date: { $set: 'Already recorded this date!' } });
      this.setState(() => ({ error }));
    } else if (this.state.activities.length === 0) {
      const error = update(this.state.error, { input: { $set: 'Need at least one activity' } });
      this.setState(() => ({ error }));
    } else if (this.totalTime() > 24) {
      const error = update(this.state.error, {
        doughnut: { $set: "Total time can't be greater than 24 hours" }
      });
      this.setState(() => ({ error }));
    } else if (!this.state.date) {
      const error = update(this.state.error, { date: { $set: "Date can't be blank" } });
      this.setState(() => ({ error }));
    } else {
      this.setState(() => ({ error: [] }));
      this.props.onSubmit({
        date: this.state.date.valueOf(),
        activities: this.state.activities,
        remainder: this.state.remainder
      });
    }
  };

  render() {
    return (
      <div className="columns">
        <div className="column is-half">
          <form onSubmit={this.onSubmit}>
            <div className="field">
              <div className="control">
                <SingleDatePicker
                  date={this.state.date}
                  onDateChange={this.onDateChange}
                  focused={this.state.calendarFocused}
                  onFocusChange={this.onFocusChange}
                  numberOfMonths={1}
                  isOutsideRange={() => false}
                  showClearDate
                  hideKeyboardShortcutsPanel
                  block
                  withPortal
                  noBorder
                />
              </div>
              {this.state.error.date && (
                <p className="has-text-dark-green">{this.state.error.date}</p>
              )}
            </div>
            <div className="field is-grouped activity-form">
              <p className="control is-expanded">
                <input
                  type="text"
                  placeholder="Add Activity"
                  className="input"
                  value={this.state.addActivityText}
                  onChange={this.onActivityNameChange}
                />
              </p>
              <div className="control">
                <div className="select">
                  <select
                    value={this.state.addActivityCat}
                    onChange={this.onActivityCategoryChange}
                  >
                    <option value="Contributor">Contributor</option>
                    <option value="Inhibitor">Inhibitor</option>
                    <option value="Basic Necessity">Basic Necessity</option>
                  </select>
                </div>
              </div>
              <p className="control">
                <button
                  className="button is-inverted is-primary is-outlined"
                  onClick={this.addActivityInput}
                >
                  Add Activity
                </button>
              </p>
            </div>
            {this.state.error.input && (
              <p className="has-text-dark-green">{this.state.error.input}</p>
            )}
            <div className="slider--box">
              {this.state.activities.map((activity, index) => (
                <ActivityInput
                  key={index}
                  index={index}
                  activity={activity}
                  onTimeSpentChange={this.onTimeSpentChange}
                  removeActivityInput={this.removeActivityInput}
                />
              ))}
            </div>
            <div className="field is-grouped is-grouped-centered">
              <p className="control">
                <button className="button is-outlined is-inverted is-primary">Submit</button>
              </p>
              <p className="control">
                <a className="button is-light" onClick={this.resetStateComplete}>
                  Clear
                </a>
              </p>
              {this.props.diem && (
                <p className="control">
                  <a className="button is-dark-green" onClick={this.props.onRemove}>
                    Delete
                  </a>
                </p>
              )}
            </div>
          </form>
        </div>
        <div className="column is-half">
          <div className="doughnut-container--form">
            <DiemDoughnut
              activities={this.state.activities}
              remainder={this.state.remainder}
              options={{
                maintainAspectRatio: false,
                legend: {
                  display: false
                }
              }}
            />
          </div>
          {this.state.error.doughnut && (
            <p className="has-text-danger has-text-centered subtitle is-4">
              {this.state.error.doughnut}
            </p>
          )}
        </div>
      </div>
    );
  }
}

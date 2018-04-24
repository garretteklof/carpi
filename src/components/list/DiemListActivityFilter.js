import React from 'react';
import { connect } from 'react-redux';
import { setActivityText } from '../../actions/filters';

export class DiemListActivityFilter extends React.Component {
  onActivityTextChange = (e) => {
    this.props.setActivityText(e.target.value);
  };

  render() {
    return (
      <input
        type="text"
        placeholder="Search By Activity"
        className="input input--filter has-text-dark-green"
        value={this.props.filters.activityText}
        onChange={this.onActivityTextChange}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  filters: state.filters
});

const mapDispatchToProps = (dispatch) => ({
  setActivityText: (activityText) => dispatch(setActivityText(activityText))
});

export default connect(mapStateToProps, mapDispatchToProps)(DiemListActivityFilter);

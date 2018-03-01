import React from 'react';
import { connect } from 'react-redux';
import DiemForm from './DiemForm';
import { startAddDiem } from '../actions/diems';

export class AddDiem extends React.Component {
  onSubmit = (diem) => {
    this.props.startAddDiem(diem);
    this.props.history.push('/dashboard');
  };

  render() {
    return (
      <div className="section">
        <div className="container">
          <DiemForm onSubmit={this.onSubmit} diems={this.props.diems} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  diems: state.diems
});

const mapDispatchToProps = (dispatch) => ({
  startAddDiem: (diem) => dispatch(startAddDiem(diem))
});

export default connect(mapStateToProps, mapDispatchToProps)(AddDiem);

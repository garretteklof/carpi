import React from 'react';
import { connect } from 'react-redux';
import selectDiems from '../selectors/diems';

export const DiemCounter = ({ diems }) => (
  <p>
    <span className="subtitle is-3">{diems.length}</span>
    {diems.length === 1 ? ' diem' : ' diems'}
  </p>
);

const mapStateToProps = (state) => ({
  diems: selectDiems(state.diems, state.filters)
});

export default connect(mapStateToProps)(DiemCounter);

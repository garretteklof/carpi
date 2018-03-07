import React from 'react';
import { connect } from 'react-redux';
import DiemListLevel from './DiemListLevel';
import DiemListItem from './DiemListItem';
import DiemListPagination from './DiemListPagination';
import selectDiems from '../../selectors/diems';

export class DiemList extends React.Component {
  state = { page: 1, perPage: 9 };
  divideDiems = (diems) => {
    const { page, perPage } = this.state;
    const indexOfLast = page * perPage;
    const indexOfFirst = indexOfLast - perPage;
    return diems.slice(indexOfFirst, indexOfLast);
  };
  paginateBackward = () => {
    this.setState(({ page }) => ({ page: page - 1 }));
  };
  paginateForward = () => {
    this.setState(({ page }) => ({ page: page + 1 }));
  };
  showPaginateForward = () => {
    const { perPage } = this.state;
    const totalDiems = this.props.diems;
    if (this.divideDiems(totalDiems).length < perPage || totalDiems.length % perPage === 0) {
      return false;
    }
    return true;
  };
  render() {
    const { diems } = this.props;
    const { page } = this.state;
    return (
      <div className="column">
        <DiemListLevel />
        <div className="columns is-multiline">
          {diems.length === 0 ? (
            <div className="column has-text-centered">
              <span className="subtitle is-4">No diems.</span>
            </div>
          ) : (
            this.divideDiems(diems).map((diem) => <DiemListItem key={diem.id} {...diem} />)
          )}
        </div>
        <DiemListPagination
          page={page}
          backward={this.paginateBackward}
          forward={this.paginateForward}
          showForward={this.showPaginateForward()}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    diems: selectDiems(state.diems, state.filters)
  };
};

export default connect(mapStateToProps)(DiemList);

import React from 'react';

export const DiemListPagination = ({ page, backward, forward, showForward }) => (
  <div className="level">
    <div className="level-left">
      <div className="level-item">
        {page > 1 && (
          <a className="icon is-large has-text-primary" onClick={backward}>
            <i className="fas fa-3x fa-arrow-circle-left" />
          </a>
        )}
      </div>
    </div>
    {page > 1 && (
      <div className="level-item">
        <span className="has-text-primary title is-3">{page}</span>
      </div>
    )}
    <div className="level-right">
      <div className="level-item">
        {showForward && (
          <a className="icon is-large has-text-primary" onClick={forward}>
            <i className="fas fa-3x fa-arrow-circle-right" />
          </a>
        )}
      </div>
    </div>
  </div>
);

export default DiemListPagination;

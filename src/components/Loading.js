import React from 'react';

export default class Loading extends React.Component {
  componentWillMount() {
    document.body.style.backgroundColor = 'white';
  }
  componentWillUnmount() {
    document.body.style.backgroundColor = '#1dd3b0';
  }
  render() {
    return (
      <div className="container">
        <img className="loading" alt="Loading..." src="/images/loading.gif" />
      </div>
    );
  }
}

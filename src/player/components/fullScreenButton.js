import React from 'react';

function FullScreenButton(props) {
  const { toggleFullScreenClick } = props;

  return (
    <button className="btn" onClick={toggleFullScreenClick}>
      <i className="fas fa-expand" />
    </button>
  );
}

export default FullScreenButton;

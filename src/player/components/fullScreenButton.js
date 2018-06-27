import React from 'react';

function FullScreenButton(props) {
  const { requestFullScreenClick } = props;

  return (
    <button className="btn" onClick={requestFullScreenClick} disabled={true}>
      <i className="fas fa-expand" />
    </button>
  );
}

export default FullScreenButton;

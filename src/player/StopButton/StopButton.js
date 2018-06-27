import React from 'react';

function StopButton(props) {
  const { stopButtonClick } = props;

  return (
    <button className="btn" onClick={stopButtonClick}>
      <i className="fas fa-stop" />
    </button>
  );
}

export default StopButton;

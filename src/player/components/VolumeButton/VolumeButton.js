import React from 'react';

function VolumeButton(props) {
  const { muted, volumeButtonClick} = props;
  const iconClass = muted ? 'fas fa-volume-off' : 'fas fa-volume-up';

  return (
    <button className="btn" onClick={volumeButtonClick}>
      <i className={iconClass} />
    </button>
  );
}

export default VolumeButton;

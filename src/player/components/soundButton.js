import React from 'react';

function SoundButton(props) {
  const { muted, soundButtonClick} = props;
  const iconClass = muted ? 'fas fa-volume-off' : 'fas fa-volume-up';

  return (
    <button className="btn" onClick={soundButtonClick}>
      <i className={iconClass} />
    </button>
  );
}

export default SoundButton;

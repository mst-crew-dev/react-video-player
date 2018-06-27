import React from 'react';

function PlayButton(props) {
  const { playInProgress, playButtonClick } = props;

  const iconClass = playInProgress ? 'fas fa-pause' : 'fas fa-play';

  return (
    <button className="btn" onClick={playButtonClick}>
      <i className={iconClass} />
    </button>
  );
}

export default PlayButton;

import React from 'react';
import './SeekBar.scss';

function SeekBar(props) {
  const { seek, seekChangeClick } = props;

  function onSeekChange(event) {
    const eventOffsetX = event.pageX - event.target.offsetLeft;
    const percent = eventOffsetX / event.target.offsetWidth;

    seekChangeClick(percent);
  }

  return (
    <progress min='0' max='100' value={seek} onClick={onSeekChange}/>
  );
}

export default SeekBar;

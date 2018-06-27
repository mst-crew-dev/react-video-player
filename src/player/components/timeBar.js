import React from 'react';

function TimeBar(props) {
  const { current, duration } = props;

  const currentMinutes = Math.floor(current / 60);
  const currentSeconds = Math.floor(current - currentMinutes * 60);
  const currentSecondsFormatted = ("0" + currentSeconds).slice(-2);

  const durationMinutes = Math.floor(duration / 60);
  const durationSeconds = Math.floor(duration - durationMinutes * 60);
  const durationSecondsFormatted = ("0" + durationSeconds).slice(-2);

  return (
    <span className="time-bar">
        {currentMinutes}:{currentSecondsFormatted} / {durationMinutes}:{durationSecondsFormatted}
    </span>
  );
}

export default TimeBar;

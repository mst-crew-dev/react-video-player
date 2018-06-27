import React, { Component } from 'react';
import TimeBar  from './components/timeBar';
import SeekBar  from './components/SeekBar/SeekBar';
import PlayButton  from './components/playButton';
import StopButton  from './components/stopButton';
import SoundButton  from './components/soundButton';
import FullScreenButton from "./components/fullScreenButton";

class Player extends Component {
  constructor() {
    super();

    this.state = {
      seek: 0,
      currentTime: 0,
      durationTime: 0,
      muted: false,
      playInProgress: false,
      source: 'https://s3-eu-west-1.amazonaws.com/onrewind-test-bucket/big_buck_bunny.mp4'
    };
    this.videoEl = React.createRef();
  }

  componentDidMount() {
    this.player = this.videoEl.current;
    this.player.addEventListener('timeupdate', this.omTimeUpdate, false);
    this.player.addEventListener('volumechange', this.onVolumeChange, false);
    this.player.addEventListener('pause', () => { this.setState({ playInProgress: false }) }, false);
    this.player.addEventListener('play', () => { this.setState({ playInProgress: true }) }, false);

    this.player.onloadeddata = () => {
      this.setState({
        durationTime: this.player.duration,
        controlsVisible: true,
      });
    };
  }

  onPlayPauseClick = () => {
    this.player.paused || this.player.ended ? this.player.play() : this.player.pause();
  };

  onStopClick = () => {
    this.player.pause();
    if (this.player.currentTime) this.player.currentTime = 0;
  };

  onMuteClick = () => {
    this.player.muted = !this.player.muted;
  };

  onVolumeChange = () => {
    this.setState({
      muted: this.player.muted
    });
  };

  omTimeUpdate = () => {
    this.setState({
      seek: Math.floor((100 / this.player.duration) * this.player.currentTime),
      currentTime: this.player.currentTime,
    });
  };

  onSeekChange = (value) => {
    this.player.currentTime = value * this.player.duration;
  };

  onToggleFullScreen = () => {
    const player = document.getElementById("player-container");

    if (document.fullscreen || document.webkitIsFullScreen) {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
    } else {
      if (player.requestFullscreen) {
        player.requestFullscreen();
      } else if (player.mozRequestFullScreen) {
        player.mozRequestFullScreen();
      } else if (player.webkitRequestFullscreen) {
        player.webkitRequestFullscreen();
      } else {
        alert('Your browser doesn\'t support full screen mode');
      }
    }
  };

  render() {
    const { source, seek, playInProgress, currentTime, durationTime, muted } = this.state;

    return (
      <div id="player-container" className="container">
        <video ref={this.videoEl} >
          <source src={source} type="video/mp4"/>
        </video>
        <div id="controls">
          <SeekBar seek={seek} seekChangeClick={this.onSeekChange}/>
          <div className="buttons">
            <div className="left">
              <PlayButton playInProgress={playInProgress} playButtonClick={this.onPlayPauseClick} />
              <StopButton stopButtonClick={this.onStopClick} />
              <TimeBar current={currentTime} duration={durationTime} />
            </div>
            <div className="right">
              <SoundButton muted={muted} soundButtonClick={this.onMuteClick} />
              <FullScreenButton toggleFullScreenClick={this.onToggleFullScreen} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Player;

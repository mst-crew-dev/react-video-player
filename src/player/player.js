import React, { Component } from 'react';
import Seek  from './components/seek/seek';
import './player.scss';

class Player extends Component {
  constructor() {
    super();

    this.state = {
      seek: 0,
      playInProgress: false,
      source: 'https://s3-eu-west-1.amazonaws.com/onrewind-test-bucket/big_buck_bunny.mp4'
    };
    this.videoEl = React.createRef();
  }

  componentDidMount() {
    this.player = this.videoEl.current;
    this.player.addEventListener('timeupdate', this.updateProgressBar, false);
    this.player.addEventListener('pause', () => { this.setState({ playInProgress: false }) }, false);
    this.player.addEventListener('play', () => { this.setState({ playInProgress: true }) }, false);
  }

  updateProgressBar = () => {
    this.setState({ seek: Math.floor((100 / this.player.duration) * this.player.currentTime) });
  };

  onPlayPause = () => {
    if (this.player.paused || this.player.ended) {
      this.player.play();
    } else {
      this.player.pause();
    }
  };

  onSeekChange = (value) => {
    this.player.currentTime = value * this.player.duration;
  };

  onVolumeChange = (event) => {
    const { value } = event.target;
    console.log(value)
    //this.player.currentTime = value * this.player.duration;
  };

  render() {
    const { source, seek, playInProgress } = this.state;
    const playButtonClass = playInProgress ? "btn btn-play btn-play-in-progress" : "btn btn-play";

    return (
      <div className="container">
        <video ref={this.videoEl} controls>
          <source src={source} type="video/mp4"/>
        </video>
        <div className="controls">
          <Seek seek={seek} seekChangeClick={this.onSeekChange}/>
          <div className="buttons">
            <div className="left">
              <button className={playButtonClass} onClick={this.onPlayPause}/>
              <input type="range" min="0" max="1" step="0.1" defaultValue="1" onChange={this.onVolumeChange} />
            </div>
            <div className="right">

            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default Player;

import React, { Component } from 'react';
import './seek.scss';

class Seek extends Component {

  onSeekChange = (event) => {
    const eventOffsetX = event.pageX - event.target.offsetLeft;
    const percent = eventOffsetX / event.target.offsetWidth;

    this.props.seekChangeClick(percent);
  };

  render() {
    const { seek } = this.props;

    return (
      <progress min='0' max='100' value={seek} onClick={this.onSeekChange}/>
    );
  }
}

export default Seek;

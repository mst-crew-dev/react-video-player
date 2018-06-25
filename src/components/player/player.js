import React, { Component } from 'react';
// import './App.css';

class Player extends Component {
  render() {
    const source = 'https://s3-eu-west-1.amazonaws.com/onrewind-test-bucket/big_buck_bunny.mp4';

    return (
      <video controls>
        <source src={source} type="video/mp4"/>
      </video>
    );
  }
}

export default Player;

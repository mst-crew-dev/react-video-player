import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import Player from './Player';
import TimeBar  from './TimeBar/TimeBar';
import SeekBar  from './SeekBar/SeekBar';
import PlayButton  from './PlayButton/PlayButton';
import StopButton  from './StopButton/StopButton';
import VolumeButton  from './VolumeButton/VolumeButton';
import FullScreenButton from "./FullScreenButton/FullScreenButton";

configure({adapter: new Adapter()});

describe('<Player />', () => {
  let component;

  beforeEach(() => {
    component = mount( <Player autoPlay /> );
  });

  it('should create player with video and controls', () => {
    expect(component.exists())
      .toBeTruthy();
    expect(component.find('video').exists())
      .toBeTruthy();
    expect(component.find(TimeBar).exists())
      .toBeTruthy();
    expect(component.find(SeekBar).exists())
      .toBeTruthy();
    expect(component.find(PlayButton).exists())
      .toBeTruthy();
    expect(component.find(StopButton).exists())
      .toBeTruthy();
    expect(component.find(VolumeButton).exists())
      .toBeTruthy();
    expect(component.find(FullScreenButton).exists())
      .toBeTruthy();
  });

  describe('Events', () => {
    beforeEach(() => {
      component.setState({
        seek: 0,
        currentTime: 0,
        durationTime: 0,
        muted: false,
        playInProgress: false,
        source: 'test.mp4'
      });
    });

    it('should change play/pause state on player events', () => {
      const onPlayPauseClickSpy = jest.spyOn(component.instance(), 'onPlayPauseClick');
      component.instance().forceUpdate();

      expect(onPlayPauseClickSpy)
        .not.toHaveBeenCalled();
      component.find(PlayButton).simulate('click');
      expect(onPlayPauseClickSpy)
        .toHaveBeenCalled();

      component.find('video').instance().dispatchEvent(new Event('play'));
      expect(component.state('playInProgress'))
        .toBeTruthy();
      component.find('video').instance().dispatchEvent(new Event('pause'));
      expect(component.state('playInProgress'))
        .toBeFalsy();
    });


    it('should trigger stopVideoClick on stop event', () => {
      const onStopClickkSpy = jest.spyOn(component.instance(), 'onStopClick');
      component.instance().forceUpdate();

      expect(onStopClickkSpy)
        .not.toHaveBeenCalled();
      component.find(StopButton).simulate('click');
      expect(onStopClickkSpy)
        .toHaveBeenCalled();
    });

    // TODO Write more tests

  });
});

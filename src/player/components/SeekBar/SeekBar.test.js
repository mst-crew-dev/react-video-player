import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import SeekBar from './SeekBar';

configure({adapter: new Adapter()});

describe('<SeekBar />', () => {

  it('should render progress bar with correct params', () => {
    const component = shallow(<SeekBar />);
    const progressBar = component.find('progress');

    expect(progressBar.exists())
      .toBeTruthy();
    expect(progressBar.prop('min'))
      .toEqual("0");
    expect(progressBar.prop('max'))
      .toEqual("100");
  });

  it('should change progress bar when seek is updated', () => {
    const component = shallow(<SeekBar />);

    component.setProps({ seek: 1 });
    expect(component.find('progress').prop('value'))
      .toEqual(1);

    component.setProps({ seek: 20 });
    expect(component.find('progress').prop('value'))
      .toEqual(20);
  });

  it('should triggers \'onSeekChangeClick\' when the progress bar is clicked', () => {
    const onSeekChangeClick = jest.fn();
    const component = shallow(<SeekBar seekChangeClick={onSeekChangeClick} />);
    const mockedEvent = { pageX: 1, target: {offsetLeft : 10, offsetWidth: 20}  };

    expect(onSeekChangeClick)
      .not.toHaveBeenCalled();

    component.find('progress').simulate('click', mockedEvent);

    expect(onSeekChangeClick)
      .toHaveBeenCalled();
  });

});

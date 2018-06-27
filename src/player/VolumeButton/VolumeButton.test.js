import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import VolumeButton from './VolumeButton';

configure({adapter: new Adapter()});

describe('<VolumeButton />', () => {

  it('should render volume button', () => {
    const component = shallow(<VolumeButton />);
    const button = component.find('button');

    expect(button.exists())
      .toBeTruthy();
    expect(button.prop('className'))
      .toContain("btn");
  });

  it('should change button state when volume is muted', () => {
    const component = shallow(<VolumeButton />);

    component.setProps({ muted: false });
    expect(component.find('i').prop('className'))
      .toEqual("fas fa-volume-up");

    component.setProps({ muted: true });
    expect(component.find('i').prop('className'))
      .toEqual("fas fa-volume-off");
  });

  it('should triggers \'onVolumeButtonClick\' when the button is clicked', () => {
    const onVolumeButtonClick = jest.fn();
    const component = shallow(<VolumeButton volumeButtonClick={onVolumeButtonClick} />);

    expect(onVolumeButtonClick)
      .not.toHaveBeenCalled();

    component.find('button').simulate('click');

    expect(onVolumeButtonClick)
      .toHaveBeenCalled();

    onVolumeButtonClick.mockClear();
  });

});

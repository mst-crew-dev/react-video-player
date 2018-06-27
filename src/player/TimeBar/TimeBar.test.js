import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import TimeBar from './TimeBar';

configure({adapter: new Adapter()});

describe('<TimeBar />', () => {

  it('should render time bar with correct time', () => {
    const component = shallow(<TimeBar />);

    component.setProps({
      current: 0,
      duration: 60.05889400,
    });

    expect(component.find('span').exists())
      .toBeTruthy();
    expect(component.find('span').text())
      .toEqual("0:00 / 1:00");
  });

  it('should update time on playing video', () => {
    const component = shallow(<TimeBar />);

    component.setProps({
      current: 0,
      duration: 60.05889400,
    });
    expect(component.find('span').text())
      .toEqual("0:00 / 1:00");

    component.setProps({ current: 3.089484 });
    expect(component.find('span').text())
      .toEqual("0:03 / 1:00");

    component.setProps({ current: 8.34563 });
    expect(component.find('span').text())
      .toEqual("0:08 / 1:00");

    component.setProps({ current: 36.08088 });
    expect(component.find('span').text())
      .toEqual("0:36 / 1:00");
  });

});

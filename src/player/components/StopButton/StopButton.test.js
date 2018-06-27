import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import StopButton from './StopButton';

configure({adapter: new Adapter()});

describe('<StopButton />', () => {

  it('should render stop button with icon', () => {
    const component = shallow(<StopButton />);
    const button = component.find('button');

    expect(button.exists())
      .toBeTruthy();
    expect(button.prop('className'))
      .toContain("btn");
    expect(button.find('i').prop('className'))
      .toContain("fas fa-stop");
  });

  it('should triggers \'onStopButtonClick\' when the button is clicked', () => {
    const onStopButtonClick = jest.fn();
    const component = shallow(<StopButton stopButtonClick={onStopButtonClick} />);

    expect(onStopButtonClick)
      .not.toHaveBeenCalled();

    component.find('button').simulate('click');

    expect(onStopButtonClick)
      .toHaveBeenCalled();
  });

});

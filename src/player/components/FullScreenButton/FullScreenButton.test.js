import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import FullScreenButton from './FullScreenButton';

configure({adapter: new Adapter()});

describe('<FullScreenButton />', () => {

  it('should render fullscreen button with icon', () => {
    const component = shallow(<FullScreenButton />);
    const button = component.find('button');

    expect(button.exists())
      .toBeTruthy();
    expect(button.prop('className'))
      .toContain("btn");
    expect(button.find('i').prop('className'))
      .toContain("fas fa-expand");
  });

  it('should triggers \'onToggleFullScreenClick\' when the button is clicked', () => {
    const onToggleFullScreenClick = jest.fn();
    const component = shallow(<FullScreenButton toggleFullScreenClick={onToggleFullScreenClick} />);

    expect(onToggleFullScreenClick)
      .not.toHaveBeenCalled();

    component.find('button').simulate('click');

    expect(onToggleFullScreenClick)
      .toHaveBeenCalled();
  });

});

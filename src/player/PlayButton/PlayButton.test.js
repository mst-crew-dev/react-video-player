import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import PlayButton from './PlayButton';

configure({adapter: new Adapter()});

describe('<PlayButton />', () => {

  it('should render play button', () => {
    const component = shallow(<PlayButton />);
    const button = component.find('button');

    expect(button.exists())
      .toBeTruthy();
    expect(button.prop('className'))
      .toContain("btn");
  });

  it('should change button state when on Play/Pause actions', () => {
    const component = shallow(<PlayButton />);

    component.setProps({ playInProgress: false });
    expect(component.find('i').prop('className'))
      .toEqual("fas fa-play");

    component.setProps({ playInProgress: true });
    expect(component.find('i').prop('className'))
      .toEqual("fas fa-pause");
  });

  it('should triggers \'onPlayButtonClick\' when the button is clicked', () => {
    const onPlayButtonClick = jest.fn();
    const component = shallow(<PlayButton playButtonClick={onPlayButtonClick} />);

    expect(onPlayButtonClick)
      .not.toHaveBeenCalled();

    component.find('button').simulate('click');

    expect(onPlayButtonClick)
      .toHaveBeenCalled();

    onPlayButtonClick.mockClear();
  });

});

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import SeekBar from './SeekBar';

configure({adapter: new Adapter()});

describe('<SeekBar />', () => {
  let component;

  beforeAll(() => {
    component = shallow(<SeekBar />);
  });

  it('should render progress bar', () => {
    expect(component.find('progress').exists())
      .toBeTruthy();
  });
});

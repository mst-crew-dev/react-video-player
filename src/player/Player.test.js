import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import Player from './Player';

configure({adapter: new Adapter()});

describe('<Player />', () => {

  xit('should render player', () => {
    const component = shallow(<Player />);

    expect(component.find('#player-container').exists())
      .toBeTruthy();
  });

});

import React from 'react';
import { shallow } from 'enzyme';
import { Homepage } from '../../../src/features/home';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<Homepage />);
  expect(renderedComponent.find('.home-homepage').length).toBe(1);
});

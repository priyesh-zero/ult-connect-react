import React from 'react';
import { shallow } from 'enzyme';
import { Homepage } from '../../../src/features/manage';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<Homepage />);
  expect(renderedComponent.find('.manage-homepage').length).toBe(1);
});

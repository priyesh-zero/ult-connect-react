import React from 'react';
import { shallow } from 'enzyme';
import { Homepage } from '../../../src/features/hierarchy';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<Homepage />);
  expect(renderedComponent.find('.hierarchy-homepage').length).toBe(1);
});

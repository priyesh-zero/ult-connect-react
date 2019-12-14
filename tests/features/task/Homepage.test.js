import React from 'react';
import { shallow } from 'enzyme';
import { Homepage } from '../../../src/features/task';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<Homepage />);
  expect(renderedComponent.find('.task-homepage').length).toBe(1);
});

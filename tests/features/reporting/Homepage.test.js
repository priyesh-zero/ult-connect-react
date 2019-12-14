import React from 'react';
import { shallow } from 'enzyme';
import { Homepage } from '../../../src/features/reporting';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<Homepage />);
  expect(renderedComponent.find('.reporting-homepage').length).toBe(1);
});

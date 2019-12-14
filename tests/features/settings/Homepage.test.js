import React from 'react';
import { shallow } from 'enzyme';
import { Homepage } from '../../../src/features/settings';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<Homepage />);
  expect(renderedComponent.find('.settings-homepage').length).toBe(1);
});

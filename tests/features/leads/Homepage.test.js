import React from 'react';
import { shallow } from 'enzyme';
import { Homepage } from '../../../src/features/leads/Homepage';

describe('leads/Homepage', () => {
  it('renders node with correct class name', () => {
    const props = {
      leads: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <Homepage {...props} />
    );

    expect(
      renderedComponent.find('.leads-homepage').length
    ).toBe(1);
  });
});

import React from 'react';
import { shallow } from 'enzyme';
import { LeadDetails } from '../../../src/features/leads/LeadDetails';

describe('leads/LeadDetails', () => {
  it('renders node with correct class name', () => {
    const props = {
      leads: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <LeadDetails {...props} />
    );

    expect(
      renderedComponent.find('.leads-lead-details').length
    ).toBe(1);
  });
});

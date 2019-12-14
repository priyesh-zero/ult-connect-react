import React from 'react';
import { shallow } from 'enzyme';
import { LeadStatusHistory } from '../../../src/features/leads/LeadStatusHistory';

describe('leads/LeadStatusHistory', () => {
  it('renders node with correct class name', () => {
    const props = {
      leads: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <LeadStatusHistory {...props} />
    );

    expect(
      renderedComponent.find('.leads-lead-status-history').length
    ).toBe(1);
  });
});

import React from 'react';
import { shallow } from 'enzyme';
import { LeadEmailHistory } from '../../../src/features/leads/LeadEmailHistory';

describe('leads/LeadEmailHistory', () => {
  it('renders node with correct class name', () => {
    const props = {
      leads: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <LeadEmailHistory {...props} />
    );

    expect(
      renderedComponent.find('.leads-lead-email-history').length
    ).toBe(1);
  });
});

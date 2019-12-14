import React from 'react';
import { shallow } from 'enzyme';
import { LeadCallHistory } from '../../../src/features/leads/LeadCallHistory';

describe('leads/LeadCallHistory', () => {
  it('renders node with correct class name', () => {
    const props = {
      leads: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <LeadCallHistory {...props} />
    );

    expect(
      renderedComponent.find('.leads-lead-call-history').length
    ).toBe(1);
  });
});

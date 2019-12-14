import React from 'react';
import { shallow } from 'enzyme';
import { LeadOrganizationHistory } from '../../../src/features/leads/LeadOrganizationHistory';

describe('leads/LeadOrganizationHistory', () => {
  it('renders node with correct class name', () => {
    const props = {
      leads: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <LeadOrganizationHistory {...props} />
    );

    expect(
      renderedComponent.find('.leads-lead-organization-history').length
    ).toBe(1);
  });
});

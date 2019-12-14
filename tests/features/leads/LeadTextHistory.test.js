import React from 'react';
import { shallow } from 'enzyme';
import { LeadTextHistory } from '../../../src/features/leads/LeadTextHistory';

describe('leads/LeadTextHistory', () => {
  it('renders node with correct class name', () => {
    const props = {
      leads: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <LeadTextHistory {...props} />
    );

    expect(
      renderedComponent.find('.leads-lead-text-history').length
    ).toBe(1);
  });
});

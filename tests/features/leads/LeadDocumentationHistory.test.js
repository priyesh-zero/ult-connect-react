import React from 'react';
import { shallow } from 'enzyme';
import { LeadDocumentationHistory } from '../../../src/features/leads/LeadDocumentationHistory';

describe('leads/LeadDocumentationHistory', () => {
  it('renders node with correct class name', () => {
    const props = {
      leads: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <LeadDocumentationHistory {...props} />
    );

    expect(
      renderedComponent.find('.leads-lead-documentation-history').length
    ).toBe(1);
  });
});

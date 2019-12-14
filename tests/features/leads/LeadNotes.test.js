import React from 'react';
import { shallow } from 'enzyme';
import { LeadNotes } from '../../../src/features/leads/LeadNotes';

describe('leads/LeadNotes', () => {
  it('renders node with correct class name', () => {
    const props = {
      leads: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <LeadNotes {...props} />
    );

    expect(
      renderedComponent.find('.leads-lead-notes').length
    ).toBe(1);
  });
});

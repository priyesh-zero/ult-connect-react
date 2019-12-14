import React from 'react';
import { shallow } from 'enzyme';
import { LeadEditDialog } from '../../../src/features/leads/LeadEditDialog';

describe('leads/LeadEditDialog', () => {
  it('renders node with correct class name', () => {
    const props = {
      leads: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <LeadEditDialog {...props} />
    );

    expect(
      renderedComponent.find('.leads-lead-edit-dialog').length
    ).toBe(1);
  });
});

import React from 'react';
import { shallow } from 'enzyme';
import { LeadTasks } from '../../../src/features/leads/LeadTasks';

describe('leads/LeadTasks', () => {
  it('renders node with correct class name', () => {
    const props = {
      leads: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <LeadTasks {...props} />
    );

    expect(
      renderedComponent.find('.leads-lead-tasks').length
    ).toBe(1);
  });
});

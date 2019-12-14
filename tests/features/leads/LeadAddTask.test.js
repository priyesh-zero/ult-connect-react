import React from 'react';
import { shallow } from 'enzyme';
import { LeadAddTask } from '../../../src/features/leads/LeadAddTask';

describe('leads/LeadAddTask', () => {
  it('renders node with correct class name', () => {
    const props = {
      leads: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <LeadAddTask {...props} />
    );

    expect(
      renderedComponent.find('.leads-lead-add-task').length
    ).toBe(1);
  });
});

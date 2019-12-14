import React from 'react';
import { shallow } from 'enzyme';
import { LeadsTable } from '../../../src/features/leads/LeadsTable';

describe('leads/LeadsTable', () => {
  it('renders node with correct class name', () => {
    const props = {
      leads: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <LeadsTable {...props} />
    );

    expect(
      renderedComponent.find('.leads-leads-table').length
    ).toBe(1);
  });
});

import React from 'react';
import { shallow } from 'enzyme';
import { LeadsFilterDialog } from '../../../src/features/leads/LeadsFilterDialog';

describe('leads/LeadsFilterDialog', () => {
  it('renders node with correct class name', () => {
    const props = {
      leads: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <LeadsFilterDialog {...props} />
    );

    expect(
      renderedComponent.find('.leads-leads-filter-dialog').length
    ).toBe(1);
  });
});

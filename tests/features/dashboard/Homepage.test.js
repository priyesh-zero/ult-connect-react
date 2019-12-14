import React from 'react';
import { shallow } from 'enzyme';
import { Homepage } from '../../../src/features/dashboard/Homepage';

describe('dashboard/Homepage', () => {
  it('renders node with correct class name', () => {
    const props = {
      dashboard: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <Homepage {...props} />
    );

    expect(
      renderedComponent.find('.dashboard-homepage').length
    ).toBe(1);
  });
});

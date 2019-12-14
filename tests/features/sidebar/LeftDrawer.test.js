import React from 'react';
import { shallow } from 'enzyme';
import { LeftDrawer } from '../../../src/features/sidebar/LeftDrawer';

describe('sidebar/LeftDrawer', () => {
  it('renders node with correct class name', () => {
    const props = {
      sidebar: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <LeftDrawer {...props} />
    );

    expect(
      renderedComponent.find('.sidebar-left-drawer').length
    ).toBe(1);
  });
});

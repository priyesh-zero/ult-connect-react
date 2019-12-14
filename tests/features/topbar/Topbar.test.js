import React from 'react';
import { shallow } from 'enzyme';
import { Topbar } from '../../../src/features/topbar/Topbar';

describe('topbar/Topbar', () => {
  it('renders node with correct class name', () => {
    const props = {
      topbar: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <Topbar {...props} />
    );

    expect(
      renderedComponent.find('.topbar-topbar').length
    ).toBe(1);
  });
});

import React from 'react';
import { shallow } from 'enzyme';
import { DefaultPage } from '../../../src/features/topbar/DefaultPage';

describe('topbar/DefaultPage', () => {
  it('renders node with correct class name', () => {
    const props = {
      topbar: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <DefaultPage {...props} />
    );

    expect(
      renderedComponent.find('.topbar-default-page').length
    ).toBe(1);
  });
});

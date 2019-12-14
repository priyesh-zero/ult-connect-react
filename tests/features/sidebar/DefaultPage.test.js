import React from 'react';
import { shallow } from 'enzyme';
import { DefaultPage } from '../../../src/features/sidebar/DefaultPage';

describe('sidebar/DefaultPage', () => {
  it('renders node with correct class name', () => {
    const props = {
      sidebar: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <DefaultPage {...props} />
    );

    expect(
      renderedComponent.find('.sidebar-default-page').length
    ).toBe(1);
  });
});

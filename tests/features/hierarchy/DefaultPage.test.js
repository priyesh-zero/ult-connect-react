import React from 'react';
import { shallow } from 'enzyme';
import { DefaultPage } from '../../../src/features/hierarchy/DefaultPage';

describe('hierarchy/DefaultPage', () => {
  it('renders node with correct class name', () => {
    const props = {
      hierarchy: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <DefaultPage {...props} />
    );

    expect(
      renderedComponent.find('.hierarchy-default-page').length
    ).toBe(1);
  });
});

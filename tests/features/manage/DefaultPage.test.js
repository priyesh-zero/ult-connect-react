import React from 'react';
import { shallow } from 'enzyme';
import { DefaultPage } from '../../../src/features/manage/DefaultPage';

describe('manage/DefaultPage', () => {
  it('renders node with correct class name', () => {
    const props = {
      manage: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <DefaultPage {...props} />
    );

    expect(
      renderedComponent.find('.manage-default-page').length
    ).toBe(1);
  });
});

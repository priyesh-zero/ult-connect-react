import React from 'react';
import { shallow } from 'enzyme';
import { DefaultPage } from '../../../src/features/configuration/DefaultPage';

describe('configuration/DefaultPage', () => {
  it('renders node with correct class name', () => {
    const props = {
      configuration: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <DefaultPage {...props} />
    );

    expect(
      renderedComponent.find('.configuration-default-page').length
    ).toBe(1);
  });
});

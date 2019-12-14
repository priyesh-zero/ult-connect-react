import React from 'react';
import { shallow } from 'enzyme';
import { DefaultPage } from '../../../src/features/reporting/DefaultPage';

describe('reporting/DefaultPage', () => {
  it('renders node with correct class name', () => {
    const props = {
      reporting: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <DefaultPage {...props} />
    );

    expect(
      renderedComponent.find('.reporting-default-page').length
    ).toBe(1);
  });
});

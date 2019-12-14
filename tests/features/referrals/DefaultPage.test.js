import React from 'react';
import { shallow } from 'enzyme';
import { DefaultPage } from '../../../src/features/referrals/DefaultPage';

describe('referrals/DefaultPage', () => {
  it('renders node with correct class name', () => {
    const props = {
      referrals: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <DefaultPage {...props} />
    );

    expect(
      renderedComponent.find('.referrals-default-page').length
    ).toBe(1);
  });
});

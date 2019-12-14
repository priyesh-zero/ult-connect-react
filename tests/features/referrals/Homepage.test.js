import React from 'react';
import { shallow } from 'enzyme';
import { Homepage } from '../../../src/features/referrals/Homepage';

describe('referrals/Homepage', () => {
  it('renders node with correct class name', () => {
    const props = {
      referrals: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <Homepage {...props} />
    );

    expect(
      renderedComponent.find('.referrals-homepage').length
    ).toBe(1);
  });
});

import React from 'react';
import { shallow } from 'enzyme';
import { Homepage } from '../../../src/features/messages/Homepage';

describe('messages/Homepage', () => {
  it('renders node with correct class name', () => {
    const props = {
      messages: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <Homepage {...props} />
    );

    expect(
      renderedComponent.find('.messages-homepage').length
    ).toBe(1);
  });
});

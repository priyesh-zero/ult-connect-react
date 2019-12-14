import React from 'react';
import { shallow } from 'enzyme';
import { Messages } from '../../../src/features/messages/Messages';

describe('messages/Messages', () => {
  it('renders node with correct class name', () => {
    const props = {
      messages: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <Messages {...props} />
    );

    expect(
      renderedComponent.find('.messages-messages').length
    ).toBe(1);
  });
});

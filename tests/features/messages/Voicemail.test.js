import React from 'react';
import { shallow } from 'enzyme';
import { Voicemail } from '../../../src/features/messages/Voicemail';

describe('messages/Voicemail', () => {
  it('renders node with correct class name', () => {
    const props = {
      messages: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <Voicemail {...props} />
    );

    expect(
      renderedComponent.find('.messages-voicemail').length
    ).toBe(1);
  });
});

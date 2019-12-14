import React from 'react';
import { shallow } from 'enzyme';
import { DefaultPage } from '../../../src/features/messages/DefaultPage';

describe('messages/DefaultPage', () => {
  it('renders node with correct class name', () => {
    const props = {
      messages: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <DefaultPage {...props} />
    );

    expect(
      renderedComponent.find('.messages-default-page').length
    ).toBe(1);
  });
});

import React from 'react';
import { shallow } from 'enzyme';
import { DefaultPage } from '../../../src/features/task/DefaultPage';

describe('task/DefaultPage', () => {
  it('renders node with correct class name', () => {
    const props = {
      task: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <DefaultPage {...props} />
    );

    expect(
      renderedComponent.find('.task-default-page').length
    ).toBe(1);
  });
});

import {
  MESSAGES_GET_CHAT,
} from '../../../../src/features/messages/redux/constants';

import {
  getChat,
  reducer,
} from '../../../../src/features/messages/redux/getChat';

describe('messages/redux/getChat', () => {
  it('returns correct action by getChat', () => {
    expect(getChat()).toHaveProperty('type', MESSAGES_GET_CHAT);
  });

  it('handles action type MESSAGES_GET_CHAT correctly', () => {
    const prevState = {};
    const state = reducer(
      prevState,
      { type: MESSAGES_GET_CHAT }
    );
    // Should be immutable
    expect(state).not.toBe(prevState);

    // TODO: use real case expected value instead of {}.
    const expectedState = {};
    expect(state).toEqual(expectedState);
  });
});

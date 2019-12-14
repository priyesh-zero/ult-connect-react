import {
  LEADS_REMOVE_ALL_LEADS,
} from '../../../../src/features/leads/redux/constants';

import {
  removeAllLeads,
  reducer,
} from '../../../../src/features/leads/redux/removeAllLeads';

describe('leads/redux/removeAllLeads', () => {
  it('returns correct action by removeAllLeads', () => {
    expect(removeAllLeads()).toHaveProperty('type', LEADS_REMOVE_ALL_LEADS);
  });

  it('handles action type LEADS_REMOVE_ALL_LEADS correctly', () => {
    const prevState = {};
    const state = reducer(
      prevState,
      { type: LEADS_REMOVE_ALL_LEADS }
    );
    // Should be immutable
    expect(state).not.toBe(prevState);

    // TODO: use real case expected value instead of {}.
    const expectedState = {};
    expect(state).toEqual(expectedState);
  });
});

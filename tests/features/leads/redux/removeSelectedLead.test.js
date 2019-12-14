import {
  LEADS_REMOVE_SELECTED_LEAD,
} from '../../../../src/features/leads/redux/constants';

import {
  removeSelectedLead,
  reducer,
} from '../../../../src/features/leads/redux/removeSelectedLead';

describe('leads/redux/removeSelectedLead', () => {
  it('returns correct action by removeSelectedLead', () => {
    expect(removeSelectedLead()).toHaveProperty('type', LEADS_REMOVE_SELECTED_LEAD);
  });

  it('handles action type LEADS_REMOVE_SELECTED_LEAD correctly', () => {
    const prevState = {};
    const state = reducer(
      prevState,
      { type: LEADS_REMOVE_SELECTED_LEAD }
    );
    // Should be immutable
    expect(state).not.toBe(prevState);

    // TODO: use real case expected value instead of {}.
    const expectedState = {};
    expect(state).toEqual(expectedState);
  });
});

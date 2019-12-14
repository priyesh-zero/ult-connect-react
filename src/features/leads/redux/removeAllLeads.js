// Rekit uses a new approach to organizing actions and reducers. That is
// putting related actions and reducers in one file. See more at:
// https://medium.com/@nate_wang/a-new-approach-for-managing-redux-actions-91c26ce8b5da

import {
  LEADS_REMOVE_ALL_LEADS,
} from './constants';

export function removeAllLeads() {
  return {
    type: LEADS_REMOVE_ALL_LEADS,
  };
}

export function reducer(state, action) {
  switch (action.type) {
    case LEADS_REMOVE_ALL_LEADS:
      return {
        ...state,
        tableData: []
      };

    default:
      return state;
  }
}

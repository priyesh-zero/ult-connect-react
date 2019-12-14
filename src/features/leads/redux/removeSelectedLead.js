// Rekit uses a new approach to organizing actions and reducers. That is
// putting related actions and reducers in one file. See more at:
// https://medium.com/@nate_wang/a-new-approach-for-managing-redux-actions-91c26ce8b5da

import {
  LEADS_REMOVE_SELECTED_LEAD,
} from './constants';

export function removeSelectedLead(id) {
  return {
    type: LEADS_REMOVE_SELECTED_LEAD,
    id
  };
}

export function reducer(state, action) {
  switch (action.type) {
    case LEADS_REMOVE_SELECTED_LEAD:
      return {
        ...state,
        tableData: state.tableData.filter((item, index) => index !== action.id)
      };

    default:
      return state;
  }
}

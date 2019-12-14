// Rekit uses a new approach to organizing actions and reducers. That is
// putting related actions and reducers in one file. See more at:
// https://medium.com/@nate_wang/a-new-approach-for-managing-redux-actions-91c26ce8b5da

import {
  MESSAGES_GET_CHAT,
} from './constants';

export function getChat(id) {
  return {
    type: MESSAGES_GET_CHAT,
    id
  };
}

export function reducer(state, action) {
  switch (action.type) {
    case MESSAGES_GET_CHAT:
      let temp = state.chatDetails;
      return {
        ...state,
        activeChat: temp.filter(item => item.id === action.id)
      };

    default:
      return state;
  }
}

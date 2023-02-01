import * as actionTypes from '../actions/uiActionTypes';
import { Map } from 'immutable';

const initialState = Map({
  isNotificationDrawerVisible: false,
  isUserLoggedIn: false,
  user: {}
});

export default function uiReducer(state = initialState, action) {
  // The reducer normally looks at the action type field to decide what happens
  switch (action.type) {
    // Do something here based on the different types of actions
    case 'DISPLAY_NOTIFICATION_DRAWER': {
      return state.set('isNotificationDrawerVisible', true);
    }
    case 'HIDE_NOTIFICATION_DRAWER': {
      return state.set('isNotificationDrawerVisible', false);
    }
    case 'LOGIN_SUCCESS': {
      return state.set('isUserLoggedIn', true);
    }
    case 'LOGIN_FAILED': {
      return state.set('isUserLoggedIn', false);
    }
    case 'LOGOUT': {
      return state.set('isUserLoggedIn', false);
    }
    default:
      // return the existing state unchanged
      return state
  }
}
import * as actionTypes from '../actions/uiActionTypes';

const initialState = {
  isNotificationDrawerVisible: false,
  isUserLoggedIn: false,
  user: {}
}

export default function uiReducer(state = initialState, action) {
  // The reducer normally looks at the action type field to decide what happens
  switch (action.type) {
    // Do something here based on the different types of actions
    case 'DISPLAY_NOTIFICATION_DRAWER': {
      return {
        ...state,
        isNotificationDrawerVisible: true
      }
    }
    case 'HIDE_NOTIFICATION_DRAWER': {
      return {
        ...state,
        isNotificationDrawerVisible: false
      }
    }
    case 'LOGIN_SUCCESS': {
      return {
        ...state,
        isUserLoggedIn: true
      }
    }
    case 'LOGIN_FAILED': {
      return {
        ...state,
        isUserLoggedIn: false
      }
    }
    case 'LOGOUT': {
      return {
        ...state,
        isUserLoggedIn: false
      }
    }
    default:
      // return the existing state unchanged
      return state
  }
}
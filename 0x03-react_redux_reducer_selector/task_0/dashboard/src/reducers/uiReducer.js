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
    case actionTypes.DISPLAY_NOTIFICATION_DRAWER: {
      return {
        ...state,
        isNotificationDrawerVisible: true
      }
    }
    case actionTypes.HIDE_NOTIFICATION_DRAWER: {
      return {
        ...state,
        isNotificationDrawerVisible: false
      }
    }
    case actionTypes.LOGIN_SUCCESS: {
      return {
        ...state,
        isUserLoggedIn: true
      }
    }
    case actionTypes.LOGIN_FAILURE: {
      return {
        ...state,
        isUserLoggedIn: false
      }
    }
    case actionTypes.LOGOUT: {
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
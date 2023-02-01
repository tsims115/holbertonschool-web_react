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
    case actionTypes.DISPLAY_NOTIFICATION_DRAWER: {
      return state.set('isNotificationDrawerVisible', true);
    }
    case actionTypes.HIDE_NOTIFICATION_DRAWER: {
      return state.set('isNotificationDrawerVisible', false);
    }
    case actionTypes.LOGIN_SUCCESS: {
      return state.set('isUserLoggedIn', true);
    }
    case actionTypes.LOGIN_FAILURE: {
      return state.set('isUserLoggedIn', false);
    }
    case actionTypes.LOGIN: {
      return state.set('isUserLoggedIn', false);
    }
    default:
      // return the existing state unchanged
      return state
  }
}
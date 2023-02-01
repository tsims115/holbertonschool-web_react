import * as notificationActionTypes from '../actions/notificationActionTypes';

const initialState = {
  filter: "DEFAULT",
  notifications: []
};

export function notificationReducer(state = initialState, action) {
  if (action.type === notificationActionTypes.SET_TYPE_FILTER) {
  }
  switch (action.type) {
    case notificationActionTypes.FETCH_NOTIFICATIONS_SUCCESS: {
      action.data.forEach(element => {
        state.notifications.push({...element, isRead: false});
      });
      return state;
    }
    case notificationActionTypes.MARK_AS_READ: {
      return {
        filter: state.filter,
        notifications: state.notifications.map((notification) => {
          if (notification.id === action.index) {
            return { ...notification, isRead: true };
          } else {
            return { ...notification, isRead: false };
          }
        })
      }
    }
    case notificationActionTypes.SET_TYPE_FILTER: {
      console.log("===================");
      return {
        filter: action.filter,
        notifications: state.notifications.map((notification) => {
          return { ...notification, isRead: false }
        })
      }
    }
    default: {
      return state
    }
  }
}

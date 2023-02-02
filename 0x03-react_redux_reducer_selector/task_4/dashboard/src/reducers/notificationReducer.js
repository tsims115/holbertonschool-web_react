import * as notificationActionTypes from '../actions/notificationActionTypes';
import { notificationsNormalizer } from '../schema/notifications';
import { Map } from 'immutable';

const initialState = {
  filter: "DEFAULT",
  notifications: []
};

export function notificationReducer(state = Map(initialState), action) {
  let newState = {
    filter: "DEFAULT",
    notifications: []
  };

  switch (action.type) {
    case notificationActionTypes.FETCH_NOTIFICATIONS_SUCCESS: {
      action.data.forEach(element => {
        newState.notifications.push({...element, isRead: false});
      });
      return state.merge(notificationsNormalizer(newState));
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

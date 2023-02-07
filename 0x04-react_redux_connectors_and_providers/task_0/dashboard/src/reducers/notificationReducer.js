import * as notificationActionTypes from '../actions/notificationActionTypes';
import { notificationsNormalizer } from '../schema/notifications';
import { Map } from 'immutable';

const initialState = {
  filter: "DEFAULT",
  notifications: []
};

export function notificationReducer(state = Map(initialState), action) {
  switch (action.type) {
    case notificationActionTypes.FETCH_NOTIFICATIONS_SUCCESS: {
      const normalize = notificationsNormalizer(action.data);
      Object.keys(normalize.notifications).map((key) => {
        normalize.notifications[key].isRead = false;
      });
      return state.merge(normalize);
    }
    case notificationActionTypes.MARK_AS_READ: {
      return state.setIn(['notifications', action.index.toString(), 'isRead'], true);
    }
    case notificationActionTypes.SET_TYPE_FILTER: {
      return state.set('filter', action.filter);
    }
    default: {
      return state
    }
  }
}

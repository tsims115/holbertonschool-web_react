import { MARK_AS_READ, SET_TYPE_FILTER, notificationTypeFilters } from './notificationActionTypes'
import { bindActionCreators } from 'redux';

export function markAsAread(index) {
  return {
    type: MARK_AS_READ,
    index
  }
}

export function setNotificationFilter(filter) {
  return {
    type: SET_TYPE_FILTER,
    filter
  }
}

export function boundNotifications(dispatch) {
  return bindActionCreators({ markAsAread, setNotificationFilter }, dispatch);
};

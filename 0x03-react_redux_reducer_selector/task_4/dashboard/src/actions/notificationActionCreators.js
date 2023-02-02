import { MARK_AS_READ, SET_TYPE_FILTER, notificationTypeFilters, FETCH_NOTIFICATIONS_SUCCESS } from './notificationActionTypes'
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

export function fetchNotificationSuccess(data) {
  return {
    type: FETCH_NOTIFICATIONS_SUCCESS,
    data
  }
}

export function boundNotifications(dispatch) {
  return bindActionCreators({ markAsAread, setNotificationFilter }, dispatch);
};

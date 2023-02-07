import { Map, getIn } from 'immutable';

export function filterTypeSelected(state) {
  return state.get('filter');
}

export function getNotifications(state) {
  return getIn(state, ['notifications'], new Map());
}

export function getUnreadNotifications(state) {
  const notifications = getNotifications(state);
  const unread = Object.keys(notifications).filter((k) => {
    if (notifications[k].isRead === false) {
      return notifications[k]
    }
  }).map((k) => {
    return notifications[k];
  });
  return Map(unread);
}

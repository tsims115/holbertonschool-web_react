import { notificationReducer } from "../reducers/notificationReducer";
import { fetchNotificationSuccess } from '../actions/notificationActionCreators';
import { Map, fromJS } from 'immutable';
import { notificationsNormalizer } from "../schema/notifications";
import { filterTypeSelected, getNotifications, getUnreadNotifications } from "./notificationSelector";

let initialState = Map({
  filter: "DEFAULT",
  notifications: []
});

let data = [
  {
    id: 1,
    type: "default",
    isRead: false,
    value: "New course available"
  },
  {
    id: 2,
    type: "urgent",
    isRead: false,
    value: "New resume available"
  },
  {
    id: 3,
    type: "urgent",
    isRead: false,
    value: "New data available"
  }
]

describe("Notification Selector", () => {
  it("filterTypeSelected returns correct filter", () => {
    const state = notificationReducer(initialState, fetchNotificationSuccess(data))
    expect(filterTypeSelected(state)).toEqual("DEFAULT");
  });
  it("getNotification returns all notifications", () => {
    const state = notificationReducer(initialState, fetchNotificationSuccess(data))
    expect(getNotifications(state)).toEqual(Map(notificationsNormalizer(data)).getIn(['notifications']));
  });
  it("getNotification returns all notifications", () => {
    let state = notificationReducer(initialState, fetchNotificationSuccess(data));
    state = state.setIn(['notifications', '1', 'isRead'], true);
    state = state.setIn(['notifications', '3', 'isRead'], true);
    expect(getUnreadNotifications(state)).toEqual(Map(
      [
        {
          id: 2,
          type: 'urgent',
          isRead: false,
          value: 'New resume available'
        }
      ]
    ));
  });
});

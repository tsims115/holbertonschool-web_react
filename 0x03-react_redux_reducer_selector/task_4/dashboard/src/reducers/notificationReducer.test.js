import { notificationReducer } from "./notificationReducer";
import * as notificationActionTypes from '../actions/notificationActionTypes';
import { fetchNotificationSuccess } from '../actions/notificationActionCreators';
import { Map, fromJS, toJS } from 'immutable';
import { notificationsNormalizer } from "../schema/notifications";

let initialState = Map({
  filter: "DEFAULT",
  notifications: []
});

let initialState2 = {
  filter: "DEFAULT",
  notifications: [
    {
      id: 1,
      isRead: false,
      type: "default",
      value: "New course available"
    },
    {
      id: 2,
      isRead: false,
      type: "urgent",
      value: "New resume available"
    },
    {
      id: 3,
      isRead: false,
      type: "urgent",
      value: "New data available"
    }
  ]
};

let data = [
  {
    id: 1,
    type: "default",
    value: "New course available"
  },
  {
    id: 2,
    type: "urgent",
    value: "New resume available"
  },
  {
    id: 3,
    type: "urgent",
    value: "New data available"
  }
]

let normalizedData = notificationsNormalizer(data);

let expectedResult = {
  filter: "DEFAULT",
  ...notificationsNormalizer(data)
};

expectedResult.notifications[1].isRead = false;
expectedResult.notifications[2].isRead = false;
expectedResult.notifications[3].isRead = false;


describe("notficationReducer", () => {
  it("returns initial state when given empty data", () => {
    expect(notificationReducer(undefined, {})).toEqual(initialState);
  });
  it("returns correct state for FETCH_NOTIFICATION_SUCCESS", () => {
    expect(notificationReducer(initialState, fetchNotificationSuccess(data)).toJS())
    .toEqual(
      expectedResult
    );
  });
  it("returns correct state for MARK_AS_READ", () => {
    expectedResult.notifications[2].isRead = true;
    initialState2.notifications = notificationsNormalizer(
      initialState2.notifications
    ).notifications;
    expect(notificationReducer(fromJS(initialState2), { type: notificationActionTypes.MARK_AS_READ, index: 2 }).toJS())
    .toEqual(
      expectedResult
    );
  });
  it("returns correct state for SET_TYPE_FILTER", () => {
    initialState2.notifications = notificationsNormalizer(
      initialState2.notifications
    ).notifications;
    expect(notificationReducer(fromJS(initialState2), { type: notificationActionTypes.SET_TYPE_FILTER, filter: "URGENT" }).toJS().filter)
    .toEqual("URGENT");
  });
});

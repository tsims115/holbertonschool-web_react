import { notificationReducer } from "./notificationReducer";
import * as notificationActionTypes from '../actions/notificationActionTypes';
import { fetchNotificationSuccess } from '../actions/notificationActionCreators';
import { fetchCourseSuccess } from "../actions/courseActionCreators";

let initialState = {
  filter: "DEFAULT",
  notifications: []
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

let expectedResult = {
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

}

describe("notficationReducer", () => {
  it("returns initial state when given empty data", () => {
    expect(notificationReducer(undefined, {})).toEqual(initialState);
  });
  it("returns correct state for FETCH_NOTIFICATION_SUCCESS", () => {
    expect(notificationReducer(initialState, fetchNotificationSuccess(data)).notifications)
    .toEqual(
      expect.arrayContaining(expectedResult.notifications)
    );
  });
  it("returns correct state for MARK_AS_READ", () => {
    initialState.notifications = data;
    expectedResult.notifications[1].isRead = true;
    expect(notificationReducer(initialState, { type: notificationActionTypes.MARK_AS_READ, index: 2 }).notifications)
    .toEqual(
      expect.arrayContaining(expectedResult.notifications)
    );
  });
  it("returns correct state for SET_TYPE_FILTER", () => {
    initialState.notifications = data;
    expectedResult.filter = "URGENT";
    expect(notificationReducer(initialState, { type: notificationActionTypes.SET_TYPE_FILTER, filter: "URGENT" }).filter)
    .toEqual(
      expectedResult.filter
    );
  });
});

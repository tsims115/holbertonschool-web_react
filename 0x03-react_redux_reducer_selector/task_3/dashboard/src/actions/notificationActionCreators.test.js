import { markAsAread, setNotificationFilter } from './notificationActionCreators';

const actionObject1 = {
  type: "MARK_AS_READ",
  index: 1
};

const actionObject2 = {
  type: "SET_TYPE_FILTER",
  filter: "DEFAULT"
};

describe("notification action creators work as intended", () => {
  it("markAsAread returns correct object", () => {
    expect(markAsAread(1)).toEqual(actionObject1);
  })
  it("setNotificationFilter returns correct object", () => {
    expect(setNotificationFilter("DEFAULT")).toEqual(actionObject2);
  })
})

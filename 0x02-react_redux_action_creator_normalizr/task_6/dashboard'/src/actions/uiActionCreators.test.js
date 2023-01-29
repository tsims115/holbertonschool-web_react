import { login, logout, displayNotificationDrawer, hideNotificationDrawer } from './uiActionCreators'

const actionObject1 = { type: "LOGIN", user: { email: "tsims115@yahoo.com", password: "Halo69" } };
const actionObject2 = { type: "LOGOUT" };
const actionObject3 = { type: "DISPLAY_NOTIFICATION_DRAWER"};
const actionObject4 = { type: "HIDE_NOTIFICATION_DRAWER"};

describe("Action Creators", () => {
  it("returns correct action for login", () => {
    expect(login("tsims115@yahoo.com", "Halo69")).toEqual(actionObject1);
  });
  it("returns correct action for logout", () => {
    expect(logout()).toEqual(actionObject2);
  });
  it("returns correct action for displayNotificationDrawer", () => {
    expect(displayNotificationDrawer()).toEqual(actionObject3);
  });
  it("returns correct action for displayNotificationDrawer", () => {
    expect(hideNotificationDrawer()).toEqual(actionObject4);
  });
});

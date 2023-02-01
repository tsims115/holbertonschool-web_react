import { login, logout, displayNotificationDrawer, hideNotificationDrawer, loginRequest, loginSuccess, loginFailure } from './uiActionCreators'
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
jest.mock('node-fetch', () => require('fetch-mock').sandbox());
const fetchMock = require('node-fetch');

const actionObject1 = { type: "LOGIN", user: { email: "tsims115@yahoo.com", password: "Halo69" } };
const actionObject2 = { type: "LOGOUT" };
const actionObject3 = { type: "DISPLAY_NOTIFICATION_DRAWER"};
const actionObject4 = { type: "HIDE_NOTIFICATION_DRAWER"};
let store = configureStore([ thunk ]);
store = store({});

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
  it("returns correct action for hideNotificationDrawer", () => {
    expect(hideNotificationDrawer()).toEqual(actionObject4);
  });
  it("loginRequest works as intended", () => {
    expect(hideNotificationDrawer()).toEqual(actionObject4);
  });
  it('verifies store received LOGIN and LOGIN_SUCCESS', () => {
    fetchMock.get('/login-success.json', 200);
    return store.dispatch(loginRequest("tsims115@yahoo.com", "Halo69"))
        .then(() => {
            const actions = store.getActions();
            expect(actions).toEqual([
                login("tsims115@yahoo.com", "Halo69"),
                loginSuccess()
            ]);
            store.clearActions();
        });
  });
});

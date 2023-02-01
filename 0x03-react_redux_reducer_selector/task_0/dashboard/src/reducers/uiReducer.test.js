import uiReducer from "./uiReducer"

const testState = {
  isNotificationDrawerVisible: false,
  isUserLoggedIn: false,
  user: {}
}

describe("uiReducer", () => {
  it("Original state gets returned when nothing passed in", () => {
    expect(uiReducer(undefined, {})).toEqual(testState);
  })
  it("Original state gets returned when nothing passed in", () => {
    expect(uiReducer(undefined, { type: "SELECT_COURSE" })).toEqual(testState);
  })
  it("Original state gets returned when nothing passed in", () => {
    testState.isNotificationDrawerVisible = true;
    expect(uiReducer(undefined, { type: "DISPLAY_NOTIFICATION_DRAWER" })).toEqual(testState);
  })
})

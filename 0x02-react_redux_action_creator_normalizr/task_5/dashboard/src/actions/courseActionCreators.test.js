import { selectCourse, unselectCourse } from './courseActionCreators'

const actionObject1 = { type: "SELECT_COURSE", payload: 1 };
const actionObject2 = { type: "UNSELECT_COURSE", payload: 1 };

describe("Action Creators", () => {
  it("returns correct action for selectCourse", () => {
    console.log(selectCourse(1));
    expect(selectCourse(1)).toEqual(actionObject1);
  });
  it("returns correct action for unselectCourse", () => {
    expect(unselectCourse(1)).toEqual(actionObject2);
  });
});

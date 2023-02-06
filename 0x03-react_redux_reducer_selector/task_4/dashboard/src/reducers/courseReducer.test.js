import { courseReducer } from "./courseReducer";
import { SELECT_COURSE, UNSELECT_COURSE } from '../actions/courseActionTypes';
import { fetchCourseSuccess } from '../actions/courseActionCreators';
import { Map, fromJS } from "immutable";
import { coursesNormalizer } from "../schema/courses";

const initialState = Map([]);

const courses = [
  { id: 1, name: "ES6", credit: 60, isSelected: false },
  { id: 2, name: "Webpack", credit: 20, isSelected: false },
  { id: 3, name: "React", credit: 40, isSelected: false }
];

describe("courseReducer", () => {
  it("returns initial state when given empty data", () => {
    expect(courseReducer(undefined, {})).toEqual(initialState);
  });

  it('FETCH_COURSE_SUCCESS action works correctly', () => {
    expect(courseReducer(initialState, fetchCourseSuccess()).toJS()).toEqual(coursesNormalizer(courses));
  });
  it('SELECT_COURSE action works correctly', () => {
    courses[1].isSelected = true;
    expect(courseReducer(fromJS(coursesNormalizer(courses)), {type: SELECT_COURSE, index: 2}).toJS()).toEqual(coursesNormalizer(courses));
  });
  it('UNSELECT_COURSE action works correctly', () => {
    courses[1].isSelected = true;
    const expected = courseReducer(fromJS(coursesNormalizer(courses)), {type: UNSELECT_COURSE, index: 2});
    courses[1].isSelected = false;
    expect(expected.toJS()).toEqual(coursesNormalizer(courses));
  });
});

import { SELECT_COURSE, UNSELECT_COURSE, FETCH_COURSE_SUCCESS } from "./courseActionTypes";
import { bindActionCreators } from "redux";

export function selectCourse(index) {
  return {
    type: SELECT_COURSE,
    index,
  };
}

export function unselectCourse(index) {
  return {
    type: UNSELECT_COURSE,
    index,
  };
}

export function fetchCourseSuccess() {
  return {
    type: FETCH_COURSE_SUCCESS,
    data: [
      {
        id: 1,
        name: "ES6",
        credit: 60,
      },
      {
        id: 2,
        name: "Webpack",
        credit: 20,
      },
      {
        id: 3,
        name: "React",
        credit: 40,
      },
    ],
  };
}

export function boundCourses(dispatch) {
  return bindActionCreators({ selectCourse, unselectCourse }, dispatch);
};

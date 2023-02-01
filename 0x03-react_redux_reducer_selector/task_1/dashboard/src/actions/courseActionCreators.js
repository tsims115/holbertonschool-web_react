import { select_course, unselect_course } from "./courseActionTypes";
import { bindActionCreators } from "redux";

export function selectCourse(index) {
  return {
    type: select_course,
    index,
  };
}

export function unselectCourse(index) {
  return {
    type: unselect_course,
    index,
  };
}

export function boundCourses(dispatch) {
  return bindActionCreators({ selectCourse, unselectCourse }, dispatch);
};

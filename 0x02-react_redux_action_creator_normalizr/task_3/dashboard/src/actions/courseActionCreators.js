import { select_course, unselect_course } from "./courseActionTypes";

export function selectCourse(index) {
  return {
    type: select_course,
    payload: index,
  };
}

export function unselectCourse(index) {
  return {
    type: unselect_course,
    payload: index,
  };
}


import * as courseActionTypes from '../actions/courseActionTypes';
import { coursesNormalizer } from '../schema/courses';
import { Map } from 'immutable';

const initialState = [];

export function courseReducer(state = Map(initialState), action) {
  let newState = [];
  switch (action.type) {
    case courseActionTypes.FETCH_COURSE_SUCCESS: {
      action.data.forEach(element => {
        newState.push({...element, isSelected: false});
      });
      return state.merge(coursesNormalizer(newState));
    }
    case courseActionTypes.SELECT_COURSE: {
      return state.setIn([action.index.toString(), 'isSelected'], true);
    }
    case courseActionTypes.UNSELECT_COURSE: {
      return state.setIn([action.index.toString(), 'isSelected'], false);
    }
    default: {
      return state
    }
  }
}

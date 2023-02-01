import * as courseActionTypes from '../actions/courseActionTypes';

const initialState = [];

export function courseReducer(state = initialState, action) {
  let newState = [];
  switch (action.type) {
    case courseActionTypes.FETCH_COURSE_SUCCESS: {
      action.data.forEach(element => {
        newState.push({...element, isSelected: false});
      });
      return newState;
    }
    case courseActionTypes.SELECT_COURSE: {
      state.forEach(element => {
        if (element.id === action.index) {
          newState.push({ ...element, isSelected: true });
        } else {
          newState.push(element);
        }
      });
      return newState;
    }
    case courseActionTypes.UNSELECT_COURSE: {
      state.forEach(element => {
        if (element.id === action.index) {
          newState.push({ ...element, isSelected: false });
        } else {
          newState.push(element);
        }
      });
      return newState;
    }
    default: {
      return state
    }
  }
}

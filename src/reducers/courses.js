import { GET_COURSES, DELETE_COURSE, ADD_COURSE, CLEAR_COURSES } from '../actions/types.js';

const initialState = {
  courses: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_COURSES:
      return {
        ...state,
        courses: action.payload,
      };
    case DELETE_COURSE:
      return {
        ...state,
        courses: state.course.filter((course) => course.id !== action.payload),
      };
    case ADD_COURSE:
      return {
        ...state,
        courses: [...state.courses, action.payload],
      };
    case CLEAR_COURSES:
      return {
        ...state,
        courses: [],
      };
    default:
      return state;
  }
}

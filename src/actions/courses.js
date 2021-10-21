import axios from 'axios';
import { createMessage, returnErrors } from './messages';
import { tokenConfig } from './auth';

import { GET_COURSES, DELETE_COURSE, ADD_COURSE } from './types';

// GET LEADS
export const getCourses = () => (dispatch, getState) => {
  axios
    .get('/api/api/courses/', tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: GET_COURSES,
        payload: res.data,
      });
    })
    .catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
};

// DELETE course
export const deleteCourse = (id) => (dispatch, getState) => {
  axios
    .delete(`/api/courses/${id}/`, tokenConfig(getState))
    .then((res) => {
      dispatch(createMessage({ deleteCourse: 'Course Deleted' }));
      dispatch({
        type: DELETE_COURSE,
        payload: id,
      });
    })
    .catch((err) => console.log(err));
};

// ADD Course
export const addCourse = (course) => (dispatch, getState) => {
  axios
    .post('/api/addcourse', course, tokenConfig(getState))
    .then((res) => {
      dispatch(createMessage({ addCourse: 'Course Added' }));
      dispatch({
        type: ADD_COURSE,
        payload: res.data,
      });
    })
    .catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
};

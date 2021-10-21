import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getCourses, deleteCourse,addCourse} from '../../actions/courses';

export class Courses extends Component {
  static propTypes = {
    courses: PropTypes.array.isRequired,
    getCourses: PropTypes.func.isRequired,
    deleteCourse: PropTypes.func.isRequired,
    deleteCourse: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.getCourses();
  }

  render() {
    return (
      <Fragment>
        <h2>Available Courses</h2>
       
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  courses: state.courses.courses,
});

export default connect(mapStateToProps, { getCourses, deleteCourse })(Courses);

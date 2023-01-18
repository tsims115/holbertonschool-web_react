import React from 'react';
import CourseListRow from './CourseListRow';
import CourseShape from './CourseShape'
import PropTypes from "prop-types";
import { StyleSheet, css } from 'aphrodite';


const courseListStyle = StyleSheet.create({
  table: {
    width: '100%',
    margin: 'auto',
    border: '0.02px solid gray',
  }
});

function CourseList({ listCourses }) {
  let courses = [];
  for (let i = 0; i < listCourses.length; i++) {
    courses.push(<CourseListRow
      key={listCourses[i].id.toString()}
      textFirstCell={listCourses[i].name}
      textSecondCell={listCourses[i].credit}
      isHeader={false} 
      />)
  }
  return (
    <table className={css(courseListStyle.table)}>
      <thead className={css(courseListStyle.thead)}>
        <CourseListRow  textFirstCell="Available courses" isHeader={true} />
        <CourseListRow textFirstCell="Course name" textSecondCell="Credit" isHeader={true} />
      </thead>
      <tbody>
        {listCourses.length == 0 &&
          <CourseListRow textFirstCell="No course available yet" isHeader={false} />
        }
        {courses}
      </tbody>
    </table>
  );
}

CourseList.propTypes = {
  listCourses: PropTypes.arrayOf(CourseShape)
};

CourseList.defaultProps = {
  listCourses: []
};

const styles = StyleSheet.create({
  courseList: {
    width: '95%',
    margin: 'auto',
    border: '1px solid gray',
    borderCollapse: 'collapse',
  },
});

export default CourseList;

import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite'


const rowStyle = {
  backgroundColor: '#f5f5f5ab'
};
const headerRowStyle = {
  backgroundColor: '#f5f5f5ab'
};

const CourseListRowStyle = StyleSheet.create({
  headerRowStyle: {
    backgroundColor: '#f5f5f5ab'
  },
  rowStyle: {
    backgroundColor: '#f5f5f5ab'
  }
});

function CourseListRow({ isHeader, textFirstCell, textSecondCell }) {
  if (isHeader) {
    if (!textSecondCell) {
      return (<tr className={css(CourseListRowStyle.headerRowStyle)}><th colSpan={2}>{textFirstCell}</th></tr>);
    } else {
      return (
        <tr className={css(CourseListRowStyle.rowStyle)}
        >
          <th>{textFirstCell}</th>
          <th>{textSecondCell}</th>
        </tr>
      );
    }
  } else {
    return (
      <tr className={css(CourseListRowStyle.rowStyle)}>
        <td>{textFirstCell}</td>
        <td>{textSecondCell}</td>
      </tr>
    );
  }
}


CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ])
}

CourseListRow.defaultProps = {
  isHeader: false,
  textSecondCell: null
}

export default CourseListRow;

import React, { useState } from 'react';
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
  },
  rowChecked: {
    backgroundColor: '#e6e4e4'
  }
});

function CourseListRow({ isHeader, textFirstCell, textSecondCell }) {
  const [ rowStyle, updateRow ] = useState(CourseListRowStyle.rowStyle);
  if (isHeader) {
    if (!textSecondCell) {
      return (<tr className={css(CourseListRowStyle.headerRowStyle)}><th colSpan={2}>{textFirstCell}</th></tr>);
    } else {
      return (
        <tr className={css(CourseListRowStyle.rowStyle)}>
          <th>{textFirstCell}</th>
          <th>{textSecondCell}</th>
        </tr>
      );
    }
  } else {
    return (
      <tr className={css(rowStyle)}>
        <td><input type='checkbox' onChange={(event) => {
          if (event.target.checked === true) {
            updateRow(CourseListRowStyle.rowChecked);
          } else {
            updateRow(CourseListRowStyle.rowStyle);
          }
        }}/>{textFirstCell}</td>
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

import React from 'react'
import PropTypes from 'prop-types';
function BodySection(props) {
  return (
    <div className='bodySection'>
      <h2>{props.title}</h2>
      {props.children}
    </div>
  )
}

BodySection.PropTypes = {
  title: PropTypes.string
}

BodySection.DefaultProps = {
  title: ""
}

export default BodySection;

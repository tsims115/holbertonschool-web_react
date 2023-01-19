import React from "react";
import PropTypes from 'prop-types'
import BodySection from "./BodySection";
import { StyleSheet, css } from "aphrodite";


const bodySectionWithMarginStyles = StyleSheet.create({
  bottomMargin: {marginBottom: '40px'}
})

class BodySectionWithMarginBottom extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div style={css(bodySectionWithMarginStyles.bottomMargin)} className="bodySectionWithMargin">
        <BodySection {...this.props} />
      </div>
    )
  }
}

BodySectionWithMarginBottom.propTypes = {
  title: PropTypes.string
}

BodySectionWithMarginBottom.defaultProps = {
  title: ""
}

export default BodySectionWithMarginBottom;
